import type { Meta, StoryObj } from "@storybook/react";

import Spacer from "../../components/Spacer";
import { CSSProperties } from "react";

const meta: Meta<typeof Spacer> = {
  title: "Component/Spacer",
  component: Spacer,
  argTypes: {
    size: { control: { type: "range", min: 8, max: 64 } },
  },
  args: {
    size: 8,
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

const Box = ({ block, style }: { block?: boolean; style?: CSSProperties }) => {
  return (
    <div
      style={{
        display: block ? "block" : "inline-block",
        width: 100,
        height: 100,
        backgroundColor: "blue",
        ...style,
      }}
    />
  );
};

export const Horizontal: Story = {
  render: (args) => (
    <>
      <Spacer {...args} type="horizontal">
        <Box />
        <Box />
        <Box />
      </Spacer>
    </>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <>
      <Spacer {...args} type="vertical">
        <Box block />
        <Box block />
        <Box block />
      </Spacer>
    </>
  ),
};
