import Select from "./Index.vue";
import { generateStoryControls } from "@/utils/storyControls";

const { props: selectProps, controls } = generateStoryControls(Select.props);

export default {
  name: "Select",
  component: Select,
  props: selectProps,
  controls,

  parameters: {
    preview: {
      height: "260px",
    },
  },

  stories: [
    {
      name: "Default",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        modelValue: "Option 2",
        isOpen: true,
        closeOnClickOutside: false,
      },
    },
    {
      name: "ShowFilter",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        showFilter: true,
        isOpen: true,
        closeOnClickOutside: false,
      },
    },
    {
      name: "Solid",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        variant: "solid",
        isOpen: true,
        closeOnClickOutside: false,
      },
    },
    {
      name: "Outlined",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        variant: "outlined",
        isOpen: true,
        closeOnClickOutside: false,
      },
    },
    {
      name: "Text",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        variant: "text",
        isOpen: true,
        closeOnClickOutside: false,
      },
    },
    {
      name: "Ghost",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        variant: "ghost",
        isOpen: true,
        closeOnClickOutside: false,
      },
    },
  ],
};
