/* 비동기 로직 제어하는 Hook */

import { useEffect } from "react";
import useAsyncFn from "./useAsyncFn";

const useAsync = (fn, deps) => {
  const [state, callback] = useAsyncFn(fn, deps);

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

export default useAsync;
