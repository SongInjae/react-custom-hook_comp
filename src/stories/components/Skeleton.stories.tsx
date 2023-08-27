import type { Meta, StoryObj } from "@storybook/react";
import Skeleton, { BoxProps, CircleProps } from "../../components/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Component/Skeleton",
};

export default meta;
//type Story = StoryObj<typeof Skeleton>;

export const Box: StoryObj<BoxProps> = {
  render: (args) => <Skeleton.Box {...args} />,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
  args: {
    width: 200,
    height: 100,
  },
};

export const Circle: StoryObj<CircleProps> = {
  render: (args) => <Skeleton.Circle {...args} />,
  argTypes: {
    size: { control: "number" },
  },
  args: {
    size: 200,
  },
};
