import { useEffect, useRef, RefObject } from "react";
import useRafState from "./useRafState";

type hooksProps = [RefObject<HTMLDivElement>, { x: number; y: number }];

const useScroll = () => {
  const [state, setState] = useRafState({ x: 0, y: 0 });
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setState({
        x: element.scrollLeft,
        y: element.scrollTop,
      });
    };

    element.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref, setState]);

  return [ref, state] as hooksProps;
};

export default useScroll;
