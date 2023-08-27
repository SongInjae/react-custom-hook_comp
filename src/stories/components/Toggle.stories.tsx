import type { Meta, StoryObj } from "@storybook/react";

import Toggle from "../../components/Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Component/Toggle",
  component: Toggle,
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <>
      <Toggle {...args} />
    </>
  ),
};
