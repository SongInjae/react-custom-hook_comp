import { CSSProperties, useMemo } from "react";
import styled from "@emotion/styled";
import FluxProvider from "./FluxProvider";

interface RowProps {
  children: React.ReactNode;
  justify?: string;
  align?: AlignType;
  gutter: number | Array<number>;
  style?: CSSProperties;
}

type AlignType = "top" | "middle" | "bottom";

const AlignToCSSValue = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

const StyledRow = styled.div<{ justify: string; align: AlignType }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => AlignToCSSValue[align]};
`;

const Row = ({
  children,
  justify = "normal",
  align = "top",
  gutter,
  ...props
}: RowProps) => {
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0];
      const verticalGutter = gutter[1];
      return {
        marginTop: `-${verticalGutter / 2}px`,
        marginBottom: `-${verticalGutter / 2}px`,
        marginLeft: `-${horizontalGutter / 2}px`,
        marginRight: `-${horizontalGutter / 2}px`,
      };
    } else {
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`,
      };
    }
  }, [gutter]);
  return (
    <FluxProvider gutter={gutter}>
      <StyledRow
        {...props}
        justify={justify}
        align={align}
        style={{ ...props.style, ...gutterStyle }}
      >
        {children}
      </StyledRow>
    </FluxProvider>
  );
};

export default Row;
