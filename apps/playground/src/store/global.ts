import { createGlobalState } from "@vueuse/core";

export const global = createGlobalState(() => {
  const components = [
    { name: "Typography", pathName: "typography", description: "Typography components for headings, paragraphs, and text elements" },
    { name: "Button", pathName: "button", description: "Interactive button component with multiple variants and severities" },
    { name: "Accordion", pathName: "accordion", description: "Collapsible content sections for organizing information" },
    { name: "Badge", pathName: "badge", description: "Badge component for displaying counts and labels" },
    { name: "Checkbox", pathName: "checkbox", description: "Checkbox input with custom styling and variants" },
    { name: "Chip", pathName: "chip", description: "Chip component for tags and removable items" },
    { name: "Drawer", pathName: "drawer", description: "Slide-out panel component for navigation or content" },
    { name: "Fieldset", pathName: "fieldset", description: "Fieldset component for grouping form elements" },
    { name: "Input", pathName: "input", description: "Text input field with floating labels and icons" },
    { name: "Layout", pathName: "layout", description: "Layout component for organizing content" },
    { name: "Message", pathName: "message", description: "Message component for displaying alerts and notifications" },
    { name: "Modal", pathName: "modal", description: "Dialog overlay for displaying important content" },
    { name: "Popover", pathName: "popover", description: "Floating content container triggered by hover" },
    { name: "ProgressBar", pathName: "progress-bar", description: "Progress bar component for showing completion status" },
    { name: "ProgressSpinner", pathName: "progress-spinner", description: "Spinner component for loading states" },
    { name: "RangeSlider", pathName: "range-slider", description: "Interactive slider for selecting numeric values" },
    { name: "Select", pathName: "select", description: "Dropdown select component with search and filtering" },
    { name: "Separator", pathName: "separator", description: "Visual divider with optional labels and icons" },
    { name: "Skeleton", pathName: "skeleton", description: "Skeleton loader component for content placeholders" },
    { name: "Switch", pathName: "switch", description: "Toggle component with multiple variants and severities" },
    { name: "Tooltip", pathName: "tooltip", description: "Tooltip component for displaying information on hover" },
    { name: "Icons", pathName: "icons", description: "Icons component for displaying icons" },
    { name: "Toast", pathName: "toast", description: "Toast notification system for displaying temporary messages" },
    { name: "JsonRenderer", pathName: "jsonrenderer", description: "Component for rendering JSON data in a formatted way" },
    { name: "MiniEditor", pathName: "mini-editor", description: "Component for editing content in a mini editor" },
  ];

  return { components };
});
