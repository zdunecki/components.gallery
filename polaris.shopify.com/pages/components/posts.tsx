import { RichCardGridProps } from "../../src/components/RichCardGrid";
import { Title } from "./components";
import { APPS, UI_ELEMENTS, TECHNOLOGIES } from "./const";

export const posts: RichCardGridProps[] = [
    {
        "url": "https://magicui.design/docs/components/rainbow-button",
        "description": "An animated button with a rainbow effect.",
        "title": <Title
            logo={APPS.magicui.logo}
            logoAlt={APPS.magicui.logoAlt}
            title="Rainbow Button"
            badges={[
                TECHNOLOGIES.react,
                TECHNOLOGIES.tailwind,
                TECHNOLOGIES.openSource
            ]}
        />,
        "previewImg": "/images/components/@magicui/rainbow-button/index.png",
        "filters": [
            UI_ELEMENTS.button,
            TECHNOLOGIES.react,
            TECHNOLOGIES.tailwind,
            TECHNOLOGIES.openSource
        ]
    },
    {
        "url": "/patterns/card-layout",
        "description": "Standardized card layout gives merchants a content structure to rely on.",
        "title": <Title
            logo={APPS.openai.logo}
            logoAlt={APPS.openai.logoAlt}
            title="Buttons"
            badges={[TECHNOLOGIES.react, TECHNOLOGIES.openSource]}
        />,
        "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
        "filters": [UI_ELEMENTS.button]
    },
    {
        "description": "Standardizing recurring actions gives merchants a predictable way to complete common tasks.",
        "title": "Common actions",
        "previewImg": "/images/patterns/common-actions/common-actions-cover-image.png",
        "filters": [UI_ELEMENTS.button]
    },
    {
        "description": "Select a date or a date range",
        "title": "Date picking",
        "previewImg": "/images/patterns/date-picking/pattern-thumbnail-date-picking.png",
        "filters": [UI_ELEMENTS.button]
    },
    {
        "description": "Highlight new features for merchants",
        "title": "New features",
        "previewImg": "/images/patterns/new-feature/new-feature-cover.png",
        "filters": [UI_ELEMENTS.button]
    },
    {
        "description": "Create, view, and edit resource objects",
        "title": "Resource details layout",
        "previewImg": "/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png",
        "filters": [UI_ELEMENTS.button]
    },
    {
        "description": "Organize and take action on resource objects",
        "title": "Resource index layout",
        "previewImg": "/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png",
        "filters": [UI_ELEMENTS.button]
    },
    {
        "url": "/apps/openai",
        "description": "Interactive chat components for user interaction.",
        "title": <Title
            logo={APPS.openai.logo}
            logoAlt={APPS.openai.logoAlt}
            title="Chat Input Component"
            badges={[TECHNOLOGIES.react, TECHNOLOGIES.openSource]}
        />,
        "previewImg": "/images/components/@openai/chat-input/index.png",
        "filters": [UI_ELEMENTS.chatInput]
    },
    {
        "description": "Standardized card layout gives merchants a content structure to rely on.",
        "title": "Card Layout",
        "previewImg": "/images/patterns/card-layout/card-layout-cover-image.png",
        "filters": [UI_ELEMENTS.card]
    },
    {
        "description": "Interactive checkbox components for user selection.",
        "title": "Checkbox Component",
        "filters": [UI_ELEMENTS.checkbox]
    }
];