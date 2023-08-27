import type { Meta, StoryObj } from "@storybook/react";

import useKeyPress from "../../hooks/useKeyPress";

const meta: Meta<typeof useKeyPress> = {
  title: "Hook/useKeyPress",
};

export default meta;
type Story = StoryObj<() => void>;

const KeyHooks = () => {
  const pressed = useKeyPress("?");

  return <>{pressed ? "Peek-A-Boo!" : "Press ? Key"}</>;
};

export const Default: Story = {
  render: () => <KeyHooks />,
};
