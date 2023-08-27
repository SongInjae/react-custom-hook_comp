import type { Meta, StoryObj } from "@storybook/react";

import useAsyncFn from "../../hooks/useAsyncFn";

const meta: Meta<typeof useAsyncFn> = {
  title: "Hook/useAsyncFn",
};

export default meta;
type Story = StoryObj<typeof useAsyncFn>;

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
  const [state, callback] = useAsyncFn(async () => {
    return await asyncReturnValue();
  }, []);

  return (
    <>
      <div>useAsyncFn 테스트</div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={callback} disabled={state.isLoading}>
        비동기 호출
      </button>
    </>
  );
};

const AsyncFailHooks = () => {
  const [state, callback] = useAsyncFn(async () => {
    return await asyncReturnError();
  }, []);

  return (
    <>
      <div>useAsyncFn 테스트</div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={callback} disabled={state.isLoading}>
        비동기 호출
      </button>
    </>
  );
};

export const Success: Story = {
  render: () => <AsyncSuccessHooks />,
};

export const Failure: Story = {
  render: () => <AsyncFailHooks />,
};
