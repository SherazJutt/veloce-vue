import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Accordion from "./Index.vue";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `\`\`\`bash \n import { Accordion } from "veloce-vue";  \n \`\`\``,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: "Item 1", content: "This is the first item's content." },
      { title: "Item 2", content: "This is the second item's content." },
      { title: "Item 3", content: "This is the third item's content." },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ title: "Single", content: "Only one item available." }],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { title: "Item 1", content: "Content 1" },
      { title: "Item 2", content: "Content 2" },
      { title: "Item 3", content: "Content 3" },
      { title: "Item 4", content: "Content 4" },
      { title: "Item 5", content: "Content 5" },
      { title: "Item 6", content: "Content 6" },
    ],
  },
};

export const WithSlots = {
  args: {
    items: [
      { title: "Slot 1", content: "", slot: "first" },
      { title: "Slot 2", content: "", slot: "second" },
      { title: "Slot 3", content: "", slot: "third" },
    ],
  },
  render: (args: any) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `
      <Accordion v-bind="args">
        <template #first>
          <div class="text-sm text-gray-600">Custom content for the <b>first</b> slot.</div>
        </template>
        <template #second>
          <ul class="list-disc pl-5 text-gray-600 text-sm">
            <li>Second slot item A</li>
            <li>Second slot item B</li>
          </ul>
        </template>
        <template #third>
          <div>
            <span class="text-gray-600 text-sm">Third slot with a </span>
            <a href="#" class="text-primary underline">link</a>
          </div>
        </template>
      </Accordion>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
            <script lang="ts" setup>
            import Accordion from "@/components/Accordion.vue";
                  
            const items = [
              { title: "Slot 1", content: "", slot: "first" },
              { title: "Slot 2", content: "", slot: "second" },
              { title: "Slot 3", content: "", slot: "third" },
            ];
            </script>
                  
            <template>
              <Accordion :items="items">
                <template #first>
                  <div class="text-sm text-gray-600">Custom content for the <b>first</b> slot.</div>
                </template>
                <template #second>
                  <ul class="list-disc pl-5 text-gray-600 text-sm">
                    <li>Second slot item A</li>
                    <li>Second slot item B</li>
                  </ul>
                </template>
                <template #third>
                  <div>
                    <span class="text-gray-600 text-sm">Third slot with a </span>
                    <a href="#" class="text-primary underline">link</a>
                  </div>
                </template>
              </Accordion>
            </template>
        `.trim(),
      },
    },
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
