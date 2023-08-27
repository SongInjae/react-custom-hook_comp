import { useCallback, useState } from "react";

type returnType = [boolean, () => void];

const useToggle = (on: boolean) => {
  const [state, setState] = useState(on);
  const toggle = useCallback(() => setState(!state), [state]);

  return [state, toggle] as returnType;
};

export default useToggle;
