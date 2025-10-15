import Input from "./Index.vue";
import { generateStoryControls } from "@/utils/storyControls";

console.log(Input.props);

const { props, controls } = generateStoryControls(Input.props);

export default {
  name: "Input",
  component: Input,
  props,
  controls,
  stories: [
    {
      name: "Default",
      showControls: false,
      args: {},
    },
    {
      name: "Placeholder",
      args: { placeholder: "Your name" },
    },
    {
      name: "HelpText",
      args: { helpText: "This is some helpful text about the field." },
    },
    {
      name: "Prefilled",
      args: { modelValue: "Sheraz Jutt" },
    },
  ],
};
