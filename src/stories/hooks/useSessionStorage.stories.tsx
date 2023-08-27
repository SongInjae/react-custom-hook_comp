import type { Meta, StoryObj } from "@storybook/react";

import useSessionStorage from "../../hooks/useSessionStorage";

const meta: Meta<typeof useSessionStorage> = {
  title: "Hook/useSessionStorage",
};

export default meta;
type Story = StoryObj<() => void>;

const SessionStorageHooks = () => {
  const [status, setStatus] = useSessionStorage("status", "404 NOT FOUND");

  return (
    <div>
      <button onClick={() => setStatus("200 OK")}>Resend</button>
      {status}
    </div>
  );
};

export const Default: Story = {
  render: () => <SessionStorageHooks />,
};
