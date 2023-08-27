/* 단축키 만드는 Hook */

import { useCallback, useEffect, useState } from "react";

const useKeyPress = (targetKey?: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const handleKeyDown = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey]
  );

  const handleKeyUp = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handleKeyUp);
    };
  });

  return keyPressed;
};

export default useKeyPress;
