import type { Meta, StoryObj } from "@storybook/react";

import Slider from "../../components/Slider";
import Icon from "../../components/Icon";
import Spacer from "../../components/Spacer";

const meta: Meta<typeof Slider> = {
  title: "Component/Slider",
  component: Slider,
  argTypes: {
    defaultValue: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    onChange: { action: "onChange" },
  },
  args: {
    defaultValue: 1,
    min: 1,
    max: 100,
    step: 0.1,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => (
    <>
      <Slider {...args}>Slider</Slider>
    </>
  ),
};

export const Volumn: Story = {
  render: () => (
    <Spacer>
      <Icon name="volume" />
      <Slider style={{ width: 100, display: "inline-block" }} />
      <Icon name="volume-2" />
    </Spacer>
  ),
};
