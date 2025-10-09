import { action } from "storybook/actions";
import MyButton from "./Index.vue";

export default {
  title: "Basic UI/Button",
  component: MyButton,
};

export const Default = {
  args: {
    label: "Button",
    disabled: false,
    onClick: action("click"),
    variant: "outlined",
  },
};
