/* 바깥쪽 부분 누르면 실행되는 Hook */

import { useEffect, useRef, RefObject } from "react";

const events = ["mousedown", "touchstart"];

const useClickAway = (handler: (e: Event) => void) => {
  const ref = useRef<HTMLElement>(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e: Event) => {
      !element.contains(e.target as Node) && savedHandler.current(e);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref, handler]);

  return ref as RefObject<HTMLDivElement>;
};

export default useClickAway;
