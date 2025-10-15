import Select from "./Index.vue";
import { generateStoryControls } from "@/utils/storyControls";

const { props: selectProps, controls } = generateStoryControls(Select.props);

export default {
  name: "Select",
  component: Select,
  props: selectProps,
  controls,
  stories: [
    {
      name: "Default",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
      },
    },
    {
      name: "ShowFilter",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        showFilter: true,
        isOpen: true,
      },
    },
    {
      name: "Solid",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        variant: "solid",
      },
    },
    {
      name: "Outlined",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        variant: "outlined",
      },
    },
    {
      name: "Text",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        variant: "text",
      },
    },
    {
      name: "Ghost",
      args: {
        options: ["Option 1", "Option 2", "Option 3"],
        variant: "ghost",
      },
    },
  ],
};
