import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "../../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Component/Avatar",
  component: Avatar,
  argTypes: {
    shape: { control: "inline-radio", options: ["circle", "round", "square"] },
    size: { control: { type: "range", min: 40, max: 200 } },
    mode: { control: "inline-radio", options: ["contain", "cover", "fill"] },
  },
  args: {
    src: "https://picsum.photos/200",
    shape: "circle",
    size: 70,
    mode: "cover",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => (
    <>
      <Avatar {...args}>Avatar</Avatar>
    </>
  ),
};

export const Group: Story = {
  render: (args) => (
    <Avatar.Group size={40}>
      <Avatar src="https://picsum.photos/200?1" />
      <Avatar src="https://picsum.photos/200?2" />
      <Avatar src="https://picsum.photos/200?3" />
      <Avatar src="https://picsum.photos/200?4" />
    </Avatar.Group>
  ),
};
