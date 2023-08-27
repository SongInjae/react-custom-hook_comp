/* 여러 입력값이 들어왔을 때, 일정시간 뒤에 한 번만 실행하도록 하는 Hook */

import { useEffect } from "react";
import useTimeoutFn from "./useTimeoutFn";

const useDebounce = (fn: () => void, ms: number, deps: any) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  // eslint-disable-next-line
  useEffect(run, deps);

  return clear;
};

export default useDebounce;
