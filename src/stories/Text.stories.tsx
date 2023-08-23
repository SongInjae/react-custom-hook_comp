import type { Meta, StoryObj } from "@storybook/react";

import Text from "../components/Text";

const meta: Meta<typeof Text> = {
  title: "Component/Text",
  component: Text,
  argTypes: {
    size: { control: "number" },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    delete: { control: "boolean" },
    color: { control: "color" },
    block: { control: "boolean" },
    paragraph: { control: "boolean" },
    mark: { control: "boolean" },
    code: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => (
    <>
      <Text {...args}>Text</Text>
      <Text {...args}>Text</Text>
    </>
  ),
};
