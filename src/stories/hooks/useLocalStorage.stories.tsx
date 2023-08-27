import type { Meta, StoryObj } from "@storybook/react";

import useLocalStorage from "../../hooks/useLocalStorage";

const meta: Meta<typeof useLocalStorage> = {
  title: "Hook/useLocalStorage",
};

export default meta;
type Story = StoryObj<() => void>;

const LocalStorageHooks = () => {
  const [status, setStatus] = useLocalStorage("status", "404 NOT FOUND");

  return (
    <div>
      <button onClick={() => setStatus("200 OK")}>Resend</button>
      {status}
    </div>
  );
};

export const Default: Story = {
  render: () => <LocalStorageHooks />,
};
