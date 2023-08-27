/* 컴포넌트가 로딩된 후, 일정시간 마다 이벤트가 실행되는 Hook */

import { useEffect } from "react";
import useIntervalFn from "./useIntervalFn";

const useInterval = (fn: () => void, ms: number) => {
  const [run, clear] = useIntervalFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useInterval;
