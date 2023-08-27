import type { Meta, StoryObj } from "@storybook/react";

import useTimeout from "../../hooks/useTimeout";

const meta: Meta<typeof useTimeout> = {
  title: "Hook/useTimeout",
};

export default meta;
type Story = StoryObj<typeof useTimeout>;

const TimeoutHooks = () => {
  const clear = useTimeout(() => {
    alert("실행!");
  }, 3000);

  return (
    <>
      <div>useTimeOut 테스트</div>
      <button onClick={clear}>멈춰!</button>
    </>
  );
};

export const Default: Story = {
  render: () => <TimeoutHooks />,
};
