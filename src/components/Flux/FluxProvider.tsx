import { createContext, useContext } from "react";

interface FluxProps {
  children: React.ReactNode;
  gutter: number | Array<number>;
}

const FluxContext = createContext({ gutter: 0 });
export const useFlux = () => useContext(FluxContext);

const FluxProvider = ({ children, gutter = 0 }: FluxProps) => {
  return (
    <FluxContext.Provider value={{ gutter }}>{children}</FluxContext.Provider>
  );
};

export default FluxProvider;
