import type { Meta, StoryObj } from "@storybook/react";

import Header from "../../components/Header";

const meta: Meta<typeof Header> = {
  title: "Component/Header",
  component: Header,
  argTypes: {
    level: { control: { type: "range", min: 1, max: 6 } },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => (
    <>
      <Header {...args}>Header</Header>
    </>
  ),
};
