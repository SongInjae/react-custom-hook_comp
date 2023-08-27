import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "../../components/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Component/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "number" },
    color: { control: "color" },
    loading: { control: "boolean" },
  },
  args: {
    size: 24,
    loading: true,
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: (args) => (
    <>
      <Spinner {...args}>Header</Spinner>
    </>
  ),
};
