import type { Meta, StoryObj } from "@storybook/react";

import useTimeoutFn from "../../hooks/useTimeoutFn";

const meta: Meta<typeof useTimeoutFn> = {
  title: "Hook/useTimeoutFn",
};

export default meta;
type Story = StoryObj<typeof useTimeoutFn>;

const TimeoutHooks = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("실행");
  }, 3000);

  return (
    <>
      <div>useTimeOutFn 테스트</div>
      <button onClick={run}>3초 뒤 실행</button>
      <button onClick={clear}>멈춰!</button>
    </>
  );
};

export const Default: Story = {
  render: () => <TimeoutHooks />,
};
