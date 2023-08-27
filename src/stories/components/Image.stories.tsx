import type { Meta, StoryObj } from "@storybook/react";

import Image from "../../components/Image";

const meta: Meta<typeof Image> = {
  title: "Component/Image",
  component: Image,
  argTypes: {
    lazy: {
      control: { type: "boolean" },
    },
    block: {
      control: { type: "boolean" },
    },
    src: {
      type: { name: "string", required: true },
      control: { type: "text" },
    },
    placeholder: {
      type: { name: "string" },
      control: { type: "text" },
    },
    threshold: {
      type: { name: "number" },
    },
    width: {
      control: { type: "range", min: 200, max: 600 },
    },
    height: {
      control: { type: "range", min: 200, max: 600 },
    },
    alt: {
      control: { type: "text" },
    },
    mode: {
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    block: false,
    src: "https://picsum.photos/200",
    placeholder: "https://via.placeholder.com/200",
    threshold: 0.5,
    width: 200,
    height: 200,
    mode: "cover",
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: (args) => <Image {...args} />,
};

export const Lazy: Story = {
  render: (args) => (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image {...args} lazy block src={`${args.src}?${i}`} key={i} />
      ))}
    </div>
  ),
};
