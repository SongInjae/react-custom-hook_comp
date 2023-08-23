import type { Meta, StoryObj } from "@storybook/react";

import Select from "../components/Select";

const meta: Meta<typeof Select> = {
  title: "Component/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    block: { control: "boolean" },
    invalid: { control: "boolean" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Label",
    placeholder: "고르세요",
    block: false,
    invalid: false,
    required: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select
      data={["Item 1", "Item 2", { label: "Item 3", value: "value" }]}
      {...args}
    />
  ),
};
