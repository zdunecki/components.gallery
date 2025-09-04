import { RichCardGridProps } from "../../src/components/RichCardGrid";
import { Title } from "./components";
import { PROJECTS, UI_ELEMENTS, TECHNOLOGIES } from "./const";

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
                    logo={PROJECTS.magicui.logo}
                    logoAlt={PROJECTS.magicui.logoAlt}
                    title="Rainbow Button"
                    badges={[
                        TECHNOLOGIES.react,
                        TECHNOLOGIES.tailwind,
                        TECHNOLOGIES.openSource
                    ]}
                />,
                "previewImg": "/images/magicuibutton2.png",
                "filters": [
                    UI_ELEMENTS.button,
                    TECHNOLOGIES.react,
                    TECHNOLOGIES.tailwind,
                    TECHNOLOGIES.openSource
                ],
            },
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": <Title
                    logo={PROJECTS.openai.logo}
                    logoAlt={PROJECTS.openai.logoAlt}
                    title="Buttons"
                    badges={[TECHNOLOGIES.react, TECHNOLOGIES.openSource]}
                />,
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "filters": [UI_ELEMENTS.button],
            },
            {
                "url": "/patterns/common-actions",
                "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
                "title": "Common actions",
                "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
                "filters": [UI_ELEMENTS.button],
            },
            {
                "url": "/patterns/date-picking",
                "description": "Select a date or a date range",
                "title": "Date picking",
                "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
                "filters": [UI_ELEMENTS.button],
            },
            {
                "url": "/patterns/new-features",
                "description": "Highlight new features for merchants",
                "title": "New features",
                "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
                "filters": [UI_ELEMENTS.button],
            },
            {
                "url": "/patterns/resource-details-layout",
                "description": "Create, view, and edit resource objects",
                "title": "Resource details layout",
                "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
                "filters": [UI_ELEMENTS.button],
            },
            {
                "url": "/patterns/resource-index-layout",
                "description": "Organize and take action on resource objects",
                "title": "Resource index layout",
                "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
                "filters": [UI_ELEMENTS.button],
            }
        ]
    },
    {
        title: "Chat Input",
        cards: [
            {
                "url": "/patterns/chat",
                "description": "Interactive chat components for user interaction.",
                "title": "Chat Component",
                "filters": [UI_ELEMENTS.chatInput],
                "previewImg": "/images/patterns/chat/pattern-thumbnail-chat.png",
            }
        ]
    },
    {
        title: "Cards",
        cards: [
            {
                "url": "/patterns/card-layout",
                "description": "Standardized card layout gives merchants a content structure to rely on.",
                "title": "Card Layout",
                "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
                "filters": [UI_ELEMENTS.card],
            }
        ]
    },
    {
        title: "Checkboxes",
        cards: [
            {
                "url": "/patterns/checkbox",
                "description": "Interactive checkbox components for user selection.",
                "title": "Checkbox Component",
                "filters": ["Checkbox"],
            }
        ]
    }
]