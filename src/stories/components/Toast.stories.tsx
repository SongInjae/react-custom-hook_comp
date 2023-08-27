import type { Meta, StoryObj } from "@storybook/react";

import Toast from "../../components/Toast";

const meta: Meta<typeof Toast> = {
  title: "Component/Toast",
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <button onClick={() => Toast.show("안녕하세요", 3000)}>Show Toast</button>
  ),
};
