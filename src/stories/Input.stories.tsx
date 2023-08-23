import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    block: { control: "boolean" },
    invalid: { control: "boolean" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
  },
  args: {
    label: "Label",
    block: false,
    invalid: false,
    required: false,
    disabled: false,
    readonly: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
};
