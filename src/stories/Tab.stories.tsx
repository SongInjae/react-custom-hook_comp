import type { Meta, StoryObj } from "@storybook/react";

import Tab from "../components/Tab";

const meta: Meta<typeof Tab> = {
  title: "Component/Tab",
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => (
    <Tab>
      <Tab.Item title="Item 1" index="item1">
        Content1
      </Tab.Item>
      <Tab.Item title="Item 2" index="item2">
        Content2
      </Tab.Item>
    </Tab>
  ),
};
