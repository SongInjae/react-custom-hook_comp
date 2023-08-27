import type { Meta, StoryObj } from "@storybook/react";

import useKey from "../../hooks/useKey";

const meta: Meta<typeof useKey> = {
  title: "Hook/useKey",
};

export default meta;
type Story = StoryObj<typeof useKey>;

const KeyHooks = () => {
  useKey("keydown", "f", () => {
    alert("f key down");
  });

  return <>useKey</>;
};

export const Default: Story = {
  render: () => <KeyHooks />,
};
