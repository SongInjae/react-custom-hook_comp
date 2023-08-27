import type { Meta, StoryObj } from "@storybook/react";

import Badge from "../../components/Badge";
import Image from "../../components/Image";

const meta: Meta<typeof Badge> = {
  title: "Component/Badge",
  component: Badge,
  argTypes: {
    count: { control: { type: "range", min: 0, max: 1000 } },
    maxCount: { control: "number" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
  args: {
    count: 10,
    maxCount: 100,
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => (
    <>
      <Badge {...args}>
        <Image
          src="https://picsum.photos/60"
          width={60}
          mode="contain"
          style={{ borderRadius: 8 }}
        />
      </Badge>
    </>
  ),
};

export const Dot: Story = {
  render: () => (
    <>
      <Badge dot>
        <Image src="https://picsum.photos/40" width={40} mode="contain" />
      </Badge>
    </>
  ),
};
