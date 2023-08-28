import React, { CSSProperties } from "react";

interface SpacerProps {
  children: React.ReactNode;
  type?: "horizontal" | "vertical";
  size?: number;
  style?: CSSProperties;
}

const Spacer = ({
  children,
  type = "horizontal",
  size = 8,
  ...props
}: SpacerProps) => {
  const spacerStyle = {
    ...props.style,
    display: type === "vertical" ? "block" : "inline-block",
    verticalAlign: type === "horizontal" ? "middle" : undefined,
  };

  const nodes = React.Children.toArray(children)
    .filter((element) => React.isValidElement(element))
    .map((element, index, elements) => {
      if (React.isValidElement(element)) {
        return React.cloneElement(element as React.ReactElement, {
          ...element.props,
          style: {
            ...element.props.style,
            marginRight:
              type === "horizontal" && index !== elements.length - 1
                ? size
                : undefined,
            marginBottom:
              type === "vertical" && index !== elements.length - 1
                ? size
                : undefined,
          },
        });
      }
    });

  return (
    <div {...props} style={spacerStyle}>
      {nodes}
    </div>
  );
};

export default Spacer;
