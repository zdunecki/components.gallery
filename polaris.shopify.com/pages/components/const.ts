export const UI_ELEMENTS = {
    accordion: "Accordion",
    breadcrumbs: "Breadcrumbs",
    button: "Button",
    chat: "Chat",
    chatInput: "Chat Input",
    checkbox: "Checkbox",
    colorPicker: "Color Picker",
    combobox: "Combobox",
    datePicker: "Date Picker",
    editableText: "Editable Text",
    fileUpload: "File Upload",
    floatingActionButton: "Floating Action Button",
    link: "Link",
    pageControl: "Page Control",
    pagination: "Pagination",
    radioButton: "Radio Button",
    ratingControl: "Rating Control",
    searchBar: "Search Bar",
    segmentedControl: "Segmented Control",
    select: "Select",
    slider: "Slider",
    stepper: "Stepper",
    switch: "Switch",
    tab: "Tab",
    textField: "Text Field",
    tile: "Tile",
    timePicker: "Time Picker",
    badge: "Badge",
    banner: "Banner",
    card: "Card",
    carousel: "Carousel",
    chip: "Chip",
    divider: "Divider",
    gallery: "Gallery",
    gridList: "Grid List",
    keyboardKey: "Keyboard Key",
    loadingIndicator: "Loading Indicator",
    mapPin: "Map Pin",
    progressIndicator: "Progress Indicator",
    sideNavigation: "Side Navigation",
    skeleton: "Skeleton",
    stackedList: "Stacked List",
    statusDot: "Status Dot",
    table: "Table",
    tableOfContents: "Table of Contents",
    toolbar: "Toolbar",
    topNavigationBar: "Top Navigation Bar",
    tree: "Tree",
    coachMarks: "Coach Marks",
    contextMenu: "Context Menu",
    dialog: "Dialog",
    drawer: "Drawer",
    dropdownMenu: "Dropdown Menu",
    fullScreenOverlay: "Full-Screen Overlay",
    navigationMenu: "Navigation Menu",
    popover: "Popover",
    toast: "Toast",
    tooltip: "Tooltip",
    avatar: "Avatar",
    icon: "Icon",
    illustration: "Illustration",
    logo: "Logo",
    photo: "Photo",
    animationAndVideo: "Animation & Video",
    heroImage: "Hero Image",
    thumbnail: "Thumbnail"
};

export const TECHNOLOGIES = {
    react: "React",
    vue: "Vue",
    tailwind: "Tailwind",
    openSource: "Open Source",
    paid: "Paid",
    storybook: "Storybook"
};

export const FILTER_CATEGORIES = {
    uiElements: UI_ELEMENTS,
    technology: TECHNOLOGIES
};

interface Project {
    title: string;
    website: string;
    logo: string;
    logoAlt: string;
}

export const APPS: Record<string, Project> = {
    magicui: {
        title: "magicui",
        website: "https://magicui.design",
        logo: "/images/projects/magicui/logo.png",
        logoAlt: "MagicUI logo",
    },
    openai: {
        title: "OpenAI",
        website: "https://openai.com",
        logo: "/images/projects/openai/logo.png",
        logoAlt: "OpenAI logo",
    },
};

export const AWESOME_DESIGN_COMPONENTS = {
    basecn: {
        title: "BaseCN",
        website: "https://basecn.dev/",
        technology: [TECHNOLOGIES.tailwind],
    }
}