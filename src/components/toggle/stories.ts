import Toggle from "./Index.vue";
import { generateStoryControls } from "@/utils/storyControls";

const { props, controls } = generateStoryControls(Toggle.props);

export default {
  name: "Toggle",
  component: Toggle,
  props,
  controls,
  stories: [
    {
      name: "Default",
      showControls: true,
      args: {},
    },
  ],
};
