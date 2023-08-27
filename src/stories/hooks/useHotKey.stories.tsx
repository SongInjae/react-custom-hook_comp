import type { Meta, StoryObj } from "@storybook/react";

import useHotKey from "../../hooks/useHotKey";
import { useState } from "react";

const meta: Meta<typeof useHotKey> = {
  title: "Hook/useHotKey",
};

export default meta;
type Story = StoryObj<typeof useHotKey>;

const HotKeyHooks = () => {
  const [value, setValue] = useState("");
  const hotkeys = [
    {
      global: true,
      combo: "meta+shift+k",
      onKeyDown: (e) => {
        alert("meta+shift+k");
      },
    },
    {
      combo: "esc",
      onKeyDown: (e) => {
        setValue("");
      },
    },
  ];

  const { handleKeyDown } = useHotKey(hotkeys);

  return (
    <div>
      <div>useHotKey 테스트</div>
      <input
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <HotKeyHooks />,
};
