import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import globby from 'globby';
import path from 'path';
import { VFile } from 'vfile';
import ComponentExamples from '../../src/components/ComponentExamples';
import type {
    ComponentExample,
    ComponentExampleSerialized,
} from '../../src/components/ComponentExamples';
import { serializeMdx } from '../../src/components/Markdown/serialize';
import Markdown from '../../src/components/Markdown';
import Page from '../../src/components/Page';
import PageMeta from '../../src/components/PageMeta';
import type { Status, FilteredTypes, SerializedMdx } from '../../src/types';
import PropsTable from '../../src/components/PropsTable';

type FrontMatter = {
    status?: Status;
    title: string;
    examples: ComponentExample[];
    seoDescription?: string;
};

interface Props {
    mdx: SerializedMdx<FrontMatter>;
    seoDescription?: string;
    examples: ComponentExampleSerialized[];
    type: FilteredTypes;
    editPageLinkPath: string;
}

function load(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
}

function resolveAppFilePath(appId: string): { mdFilePath: string; relativeMdPath: string } | null {
    // Handle main app routes: /apps/openai -> content/apps/openai/index.mdx
    const mdPath = `content/apps/${appId}/index.mdx`;
    const mdFilePath = path.resolve(process.cwd(), mdPath);

    if (fs.existsSync(mdFilePath)) {
        return {
            mdFilePath,
            relativeMdPath: mdPath
        };
    }

    return null;
}

const App = ({
    examples,
    mdx,
    seoDescription,
    type,
    editPageLinkPath,
}: Props) => {
    return (
        <Page editPageLinkPath={editPageLinkPath} isContentPage>
            <PageMeta title={mdx.frontmatter.title} description={seoDescription} />

            <Markdown
                {...mdx}
                components={{
                    Examples: () =>
                        Boolean(examples.length) ? (
                            <ComponentExamples
                                examples={examples}
                                componentTitle={mdx.frontmatter.title}
                            />
                        ) : null,
                    Props: ({ componentName }) =>
                        type && mdx.frontmatter.status !== 'Deprecated' ? (
                            <PropsTable componentName={componentName} types={type} />
                        ) : null,
                }}
            />
        </Page>
    );
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (context) => {
    const id = context.params?.id;

    if (!id) {
        return { notFound: true };
    }

    const fileInfo = resolveAppFilePath(id);
    if (!fileInfo) {
        return { notFound: true };
    }

    const { mdFilePath, relativeMdPath } = fileInfo;
    const editPageLinkPath = `polaris.shopify.com/${relativeMdPath}`;

    const [mdx, data] = await serializeMdx<FrontMatter>(mdFilePath, { load });

    const seoDescription =
        typeof mdx.frontmatter.seoDescription === 'string'
            ? mdx.frontmatter.seoDescription
            : (data.firstParagraph as string) ?? null;

    const examples: Array<ComponentExampleSerialized> = await Promise.all(
        (mdx.frontmatter.examples || []).map(
            async (example: ComponentExample) => {
                const examplePath = path.resolve(
                    process.cwd(),
                    `pages/examples/${example.fileName}`,
                );
                let code = '';

                if (fs.existsSync(examplePath)) {
                    code = fs.readFileSync(examplePath, 'utf-8');
                    code = code
                        .split('\n')
                        .filter((line) => !line.includes('withPolarisExample'))
                        .join('\n');
                }

                let description = null;

                if (example.description) {
                    [description] = await serializeMdx(new VFile(example.description));
                }

                return { ...example, description, code };
            },
        ),
    );

    // Skip props generation for app pages since they don't have component props
    let type = {};

    const props: Props = {
        mdx,
        examples,
        seoDescription,
        type,
        editPageLinkPath,
    };

    return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Generate paths dynamically from content files
    const globPath = path.resolve(process.cwd(), 'content/apps/**/*.mdx');
    const paths = globby
        .sync(globPath)
        .map((filePath) => {
            const relativePath = filePath.replace(`${process.cwd()}/content`, '');
            let appPath;

            // If it's an index.mdx file, remove the /index.mdx part
            if (filePath.endsWith('index.mdx')) {
                appPath = relativePath.replace('/index.mdx', '');
            } else {
                // Otherwise just remove the .mdx extension
                appPath = relativePath.replace('.mdx', '');
            }

            // Convert /apps/openai to { params: { id: 'openai' } }
            // Skip nested routes (3+ segments) as they are handled by [id]/[slug].tsx
            const segments = appPath.split('/').filter(Boolean);
            if (segments.length === 2 && segments[0] === 'apps') {
                // Only generate paths for main app routes (2 segments: apps/openai)
                return {
                    params: {
                        id: segments[1]
                    }
                };
            }

            return null;
        })
        .filter((path): path is { params: { id: string } } => path !== null);

    return {
        paths,
        fallback: false,
    };
};

export default App;
