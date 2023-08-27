/* 비동기 로직 제어하는 Hook */

import { useCallback, useRef, useState } from "react";

type anyType = number | string | object | boolean | Array<anyType>;

interface stateProps {
  isLoading: boolean;
  value?: anyType;
  error?: string;
}

const useAsyncFn = (fn: () => void, deps: Array<null | anyType>) => {
  const lastCallId = useRef(0);
  const [state, setState] = useState<stateProps>({ isLoading: false });

  const callback = useCallback((...args) => {
    const callId = ++lastCallId.current;

    if (!state.isLoading) {
      setState({ ...state, isLoading: true });
    }

    return fn(...args).then(
      (value: anyType) => {
        callId === lastCallId.current && setState({ value, isLoading: false });
        return value;
      },
      (error: string) => {
        callId === lastCallId.current && setState({ error, isLoading: false });
        return error;
      }
    );
    //eslint-disable-next-line
  }, deps);

  return [state, callback] as [stateProps, (...args: any[]) => any];
};

export default useAsyncFn;
