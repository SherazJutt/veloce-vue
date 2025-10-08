import Button from "./Button.vue";

export default {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: { control: { type: "select" }, options: ["solid", "outlined", "text", "ghost"] },
		iconPosition: { control: { type: "inline-radio" }, options: ["left", "right"] },
	},
	args: {
		label: "Button",
	},
};

export const Basic = {
	args: {
		label: "Click me",
	},
};
