import type { Meta, StoryObj } from "@storybook/react";

import useIntervalFn from "../../hooks/useIntervalFn";
import { useState } from "react";

const meta: Meta<typeof useIntervalFn> = {
  title: "Hook/useIntervalFn",
};

export default meta;
type Story = StoryObj<typeof useIntervalFn>;

const IntervalHooks = () => {
  const [array, setArray] = useState([] as Array<string>);
  const [run, clear] = useIntervalFn(() => {
    setArray([...array, "추가됨"]);
  }, 1000);

  return (
    <>
      <div>useIntervalFn 테스트</div>
      <div>{array}</div>
      <button onClick={run}>1초 마다 추가</button>
      <button onClick={clear}>멈춰!</button>
    </>
  );
};

export const Default: Story = {
  render: () => <IntervalHooks />,
};
