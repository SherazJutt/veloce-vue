import Button from "./Index.vue";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(Button.props);

const meta = {
  title: "Components/Button",
  component: Button,
  args,
  argTypes,
};

export default meta;

export const Default = {
  args: {
    icon: "",
    label: "Label",
    iconPosition: "right",
  },
};
