import fs from 'fs';
import globby from 'globby';
import path from 'path';
import { VFile } from 'vfile';
import type { GetStaticPaths, GetStaticProps } from 'next';
import ComponentExamples from '../../../src/components/ComponentExamples';
import type {
    ComponentExample,
    ComponentExampleSerialized,
} from '../../../src/components/ComponentExamples';
import { serializeMdx } from '../../../src/components/Markdown/serialize';
import Markdown from '../../../src/components/Markdown';
import Page from '../../../src/components/Page';
import PageMeta from '../../../src/components/PageMeta';
import type { Status, FilteredTypes, SerializedMdx } from '../../../src/types';
import PropsTable from '../../../src/components/PropsTable';

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

interface Props {
    editPageLinkPath: string;
}

const Apps = ({
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

function load(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
}

function resolveAppFilePath(appId: string, slug: string): { mdFilePath: string; relativeMdPath: string } | null {
    // Handle nested routes: /apps/openai/ui-elements -> content/apps/openai/ui-elements/index.mdx
    // Handle main app routes: /apps/openai/index -> content/apps/openai/index.mdx
    // Handle direct app routes: /apps/openai -> content/apps/openai/index.mdx

    let mdPath: string;
    if (slug === 'index') {
        mdPath = `content/apps/${appId}/index.mdx`;
    } else {
        // Try both possible nested paths
        const nestedIndexPath = `content/apps/${appId}/${slug}/index.mdx`;
        const directNestedPath = `content/apps/${appId}/${slug}.mdx`;

        const nestedIndexFilePath = path.resolve(process.cwd(), nestedIndexPath);
        const directNestedFilePath = path.resolve(process.cwd(), directNestedPath);

        if (fs.existsSync(nestedIndexFilePath)) {
            mdPath = nestedIndexPath;
        } else if (fs.existsSync(directNestedFilePath)) {
            mdPath = directNestedPath;
        } else {
            return null;
        }
    }

    const mdFilePath = path.resolve(process.cwd(), mdPath);

    if (fs.existsSync(mdFilePath)) {
        return {
            mdFilePath,
            relativeMdPath: mdPath
        };
    }

    return null;
}


export const getStaticProps: GetStaticProps<
    Props,
    { id: string; slug: string }
> = async (context) => {
    const appId = context.params?.id;
    const slug = context.params?.slug;

    if (!appId || !slug) {
        return { notFound: true };
    }

    const fileInfo = resolveAppFilePath(appId, slug);
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
                    // Since this markdown didn't come from a real file, we use a VFile
                    // instead
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
    const globPath = path.resolve(process.cwd(), 'content/apps/**/*.mdx');
    console.log(55555)
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

            // Convert /apps/openai/ui-elements to { params: { id: 'openai', slug: 'ui-elements' } }
            // Skip /apps/openai (index routes) as they are handled by [id].tsx
            const segments = appPath.split('/').filter(Boolean);
            console.log(segments, 55555)
            if (segments.length >= 3 && segments[0] === 'apps') {
                // Only generate paths for nested routes (3+ segments: apps/openai/ui-elements)
                return {
                    params: {
                        id: segments[1],
                        slug: segments.slice(2).join('/') // Join all remaining segments for nested routes
                    }
                };
            }

            return null;
        })
        .filter((path): path is { params: { id: string; slug: string } } => path !== null);

    return {
        paths,
        fallback: false,
    };
};

export default Apps;
