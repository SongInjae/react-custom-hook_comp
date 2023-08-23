import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  block: boolean;
  paragraph: boolean;
  size: number;
  strong: boolean;
  underline: boolean;
  delete: boolean;
  color: string;
  mark: boolean;
  code: boolean;
  style?: React.CSSProperties;
}

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
  ...props
}: Partial<TextProps>) => {
  const Tag = block ? "div" : paragraph ? "p" : "span";
  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize: size,
    textDecoration: underline ? "underline" : undefined,
    color,
  };

  if (mark) {
    children = <mark>{children}</mark>;
  }

  if (code) {
    children = <code>{children}</code>;
  }

  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <Tag style={{ ...fontStyle, ...props.style }} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
