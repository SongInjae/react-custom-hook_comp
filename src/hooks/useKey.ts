/* 단축키 만드는 Hook */

import { useCallback, useEffect } from "react";

type EventType = "keydown" | "keyup";

const useKey = (
  event: EventType = "keydown",
  targetKey: string,
  handler: () => void
) => {
  const handleKey = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        handler();
      }
    },
    [targetKey, handler]
  );

  useEffect(() => {
    window.addEventListener(event, handleKey);

    return () => {
      window.removeEventListener(event, handleKey);
    };
  }, [event, targetKey, handleKey]);
};

export default useKey;
