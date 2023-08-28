import styled from "@emotion/styled";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  style: CSSProperties;
  onChange: (num: number) => void;
}

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16px;
`;

const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #aaa;
`;

const Handle = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  border: 2px solid #44b;
  border-radius: 50%;
  background-color: white;
  cursor: grab;
`;

const Track = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 2px;
  background-color: #44b;
`;

const Slider = ({
  min = 0,
  max = 100,
  step = 0.1,
  defaultValue,
  style,
  onChange,
  ...props
}: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [value, setValue] = useState(defaultValue ? defaultValue : min);

  const HandleMouseDown = useCallback(() => {
    setDragging(true);
  }, []);

  const HandleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    const HandleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      if (!sliderRef.current) return;
      const handleOffset = e.pageX - sliderRef.current.offsetLeft;
      const sliderWidth = sliderRef.current.offsetWidth;

      const track = handleOffset / sliderWidth;
      let newValue;
      if (track < 0) {
        newValue = min;
      } else if (track > 1) {
        newValue = max;
      } else {
        newValue = Math.round((min + (max - min) * track) / step) * step;
        newValue = Math.min(max, Math.max(min, newValue));
      }
      setValue(newValue);
      onChange && onChange(newValue);
    };

    document.addEventListener("mousemove", HandleMouseMove);
    document.addEventListener("mouseup", HandleMouseUp);

    return () => {
      document.removeEventListener("mousemove", HandleMouseMove);
      document.removeEventListener("mouseup", HandleMouseUp);
    };
  }, [value, min, max, dragging, sliderRef, HandleMouseUp, onChange, step]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <SliderContainer ref={sliderRef} style={style} {...props}>
      <Rail />
      <Track style={{ width: `${percentage}%` }} />
      <Handle
        onMouseDown={HandleMouseDown}
        style={{ left: `${percentage}%` }}
      />
    </SliderContainer>
  );
};

export default Slider;
