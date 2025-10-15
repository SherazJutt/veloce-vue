import Button from "./Index.vue";
import { generateStoryControls } from "@/utils/storyControls";

const { props, controls } = generateStoryControls(Button.props);

export default {
  name: "Button",
  component: Button,
  props,
  controls,
  stories: [
    {
      name: "Default",
      showControls: true,
      args: { icon: "", label: "Label", iconPosition: "right" },
    },
    {
      name: "WithIconLeft",
      args: { label: "Label", icon: "check", iconPosition: "left" },
    },
    {
      name: "WithIconRight",
      args: { label: "Label", icon: "check", iconPosition: "right" },
    },
    {
      name: "Loading",
      args: { label: "Loading...", loading: true, icon: "check" },
    },
    {
      name: "Disabled",
      args: { label: "Disabled", disabled: true, icon: "check" },
    },
    {
      name: "Solid",
      args: { label: "Solid", variant: "solid" },
    },
    {
      name: "Outlined",
      args: { label: "Outlined", variant: "outlined" },
    },
    {
      name: "Text",
      args: { label: "Text", variant: "text" },
    },
    {
      name: "Ghost",
      args: { label: "Ghost", variant: "ghost" },
    },
    {
      name: "Rounded",
      args: { label: "Rounded", rounded: true, icon: "check" },
    },
    {
      name: "OnlyIcon",
      args: { icon: "check", label: "", rounded: true },
    },
    {
      name: "CustomIconClass",
      args: { label: "Custom icon", icon: "check", iconClass: "w-5 h-5" },
    },
  ],
};
