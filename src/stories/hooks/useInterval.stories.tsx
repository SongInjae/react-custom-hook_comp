import type { Meta, StoryObj } from "@storybook/react";

import useInterval from "../../hooks/useInterval";
import { useState } from "react";

const meta: Meta<typeof useInterval> = {
  title: "Hook/useInterval",
};

export default meta;
type Story = StoryObj<typeof useInterval>;

const IntervalHooks = () => {
  const [array, setArray] = useState([] as Array<string>);
  const clear = useInterval(() => {
    setArray([...array, "추가됨"]);
  }, 1000);

  return (
    <>
      <div>useInterval 테스트</div>
      <div>{array}</div>
      <button onClick={clear}>멈춰!</button>
    </>
  );
};

export const Default: Story = {
  render: () => <IntervalHooks />,
};
