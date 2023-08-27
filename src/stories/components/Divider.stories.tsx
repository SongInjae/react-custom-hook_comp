import type { Meta, StoryObj } from "@storybook/react";

import Text from "../../components/Text";
import Divider from "../../components/Divider";

const meta: Meta<typeof Divider> = {
  title: "Component/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <>
      <Text>위</Text>
      <Divider type="horizontal" />
      <Text>아래</Text>
    </>
  ),
};
