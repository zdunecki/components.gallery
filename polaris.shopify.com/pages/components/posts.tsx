import { ButtonGroup } from "@shopify/polaris";

import IconDetails from "../../src/components/IconDetails";
import { RichCardGridProps } from "../../src/components/RichCardGrid";

import cn from "./styles.module.css";

interface TitleProps {
    title: string;
    badges?: string[];
    logo?: string;
    logoAlt?: string;
}

function Title({ logo, title, badges, logoAlt }: TitleProps) {
    return (
        <div className={cn.Title}>
            {logo && <div className={cn.Logo}>
                <img
                    className={cn.Img}
                    crossOrigin="anonymous"
                    src={logo}
                    alt={logoAlt}
                />
            </div>
            }

            <div className="title">
                <div>
                    {title}
                </div>
                <ButtonGroup gap="extraTight">
                    {badges?.map((badge) => (
                        <IconDetails.Badge key={badge}>{badge}</IconDetails.Badge>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
}

interface Posts {
    title: string;
    cards: RichCardGridProps[];
}

export const posts: Posts[] = [
    {
        title: "Buttons",
        cards: [
            {
                "url": "https://magicui.design/docs/components/rainbow-button",
                "description": "An animated button with a rainbow effect.",
                "title": <Title
                    logo="/images/brand-logos/magicui.png"
                    title="Rainbow Button"
                    badges={["React", "Open Source"]}
                />,
                "lede": "An animated button with a rainbow effect.",
                "previewImg": "/images/magicuibutton2.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": <Title
                    logo="/images/brand-logos/openai.png"
                    title="Buttons"
                    badges={["React", "Open Source"]}
                />,
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    }, {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    }, {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    }
    , {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    }
    , {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
    {
        title: "Buttons",
        cards: [
            {
                "url": "/patterns/app-settings-layout",
                "description": "Scan and find groups of settings in apps",
                "title": <div>
                    <div>
                        Hello
                    </div>
                    <ButtonGroup gap="extraTight">
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                        <IconDetails.Badge>
                            Open Source
                        </IconDetails.Badge>
                    </ButtonGroup>
                </div>,
                "lede": "Lets merchants scan and find groups of settings in apps.",
                "previewImg": "/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8217",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card layout",
                "lede": "Standardized card layout gives merchants a content structure to rely on.",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "hideChildren": true,
                "order": 1000
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "lede": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "keywords": [
                    "common actions",
                    "actions"
                ],
                "hideChildren": true,
                "showTOC": true,
                "variants": [
                    "variants/overview.mdx",
                    "variants/best-practices.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "lede": "Lets merchants select a date or a date range",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/7853",
                "hideChildren": true,
                "variants": [
                    "variants/single-date.mdx",
                    "variants/date-range.mdx",
                    "variants/date-list.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "lede": "Help merchants discover new and impactful features.",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/6751",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "lede": "Lets merchants create, view, and edit resource objects.",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8216",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "lede": "Lets merchants organize and take action on resource objects.",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "githubDiscussionsLink": "https://github.com/Shopify/polaris/discussions/8215",
                "hideChildren": true,
                "variants": [
                    "variants/default.mdx"
                ],
                "order": 1000
            }
        ]
    },
]