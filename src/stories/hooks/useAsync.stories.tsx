import type { Meta, StoryObj } from "@storybook/react";

import useAsync from "../../hooks/useAsync";

const meta: Meta<typeof useAsync> = {
  title: "Hook/useAsync",
};

export default meta;
type Story = StoryObj<typeof useAsync>;

const asyncReturnValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
};

const asyncReturnError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Fail");
    }, 1000);
  });
};

const AsyncSuccessHooks = () => {
  const state = useAsync(async () => {
    return await asyncReturnValue();
  }, []);

  return (
    <>
      <div>useAsync 테스트</div>
      <div>{JSON.stringify(state)}</div>
    </>
  );
};

const AsyncFailHooks = () => {
  const state = useAsync(async () => {
    return await asyncReturnError();
  }, []);

  return (
    <>
      <div>useAsync 테스트</div>
      <div>{JSON.stringify(state)}</div>
    </>
  );
};

export const Success: Story = {
  render: () => <AsyncSuccessHooks />,
};

export const Failure: Story = {
  render: () => <AsyncFailHooks />,
};
