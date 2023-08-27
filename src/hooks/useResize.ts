/* target의 크기가 변경되었을 때, 이벤트를 실행시키는 Hook */

import { useEffect, useRef, RefObject } from "react";

const useResize = (handler: (ent: DOMRectReadOnly) => void) => {
  const ref = useRef<HTMLElement>(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      savedHandler.current(entries[0].contentRect);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return ref as RefObject<HTMLDivElement>;
};

export default useResize;
