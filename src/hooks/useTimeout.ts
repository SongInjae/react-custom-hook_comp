/* 컴포넌트가 로딩된 후, 일정시간 뒤에 이벤트가 실행되는 Hook */

import { useEffect } from "react";
import useTimeoutFn from "./useTimeoutFn";

const useTimeout = (fn: () => void, ms: number) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useTimeout;
