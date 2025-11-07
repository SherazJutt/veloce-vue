import { createGlobalState } from "@vueuse/core";

export const global = createGlobalState(() => {
  const components = [
    { name: "Button", pathName: "button", description: "Interactive button component with multiple variants and severities" },
    { name: "Accordion", pathName: "accordion", description: "Collapsible content sections for organizing information" },
    { name: "Checkbox", pathName: "checkbox", description: "Checkbox input with custom styling and variants" },
    { name: "Drawer", pathName: "drawer", description: "Slide-out panel component for navigation or content" },
    { name: "Input", pathName: "input", description: "Text input field with floating labels and icons" },
    { name: "Modal", pathName: "modal", description: "Dialog overlay for displaying important content" },
    { name: "Popover", pathName: "popover", description: "Floating content container triggered by hover" },
    { name: "RangeSlider", pathName: "range-slider", description: "Interactive slider for selecting numeric values" },
    { name: "Select", pathName: "select", description: "Dropdown select component with search and filtering" },
    { name: "Separator", pathName: "separator", description: "Visual divider with optional labels and icons" },
    { name: "Switch", pathName: "switch", description: "Toggle component with multiple variants and severities" },
    { name: "Tooltip", pathName: "tooltip", description: "Tooltip component for displaying information on hover" },
  ];

  return { components };
});
