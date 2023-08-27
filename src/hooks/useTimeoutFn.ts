/* 일정 시간이 지난 후, 이벤트를 실행하도록 하는 Hook */

import { useCallback, useEffect, useRef } from "react";

const useTimeoutFn = (fn: () => void, ms: number) => {
  const timeoutId = useRef<any>(null);
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

export default useTimeoutFn;
