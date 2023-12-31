import { CSSProperties } from "react";

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeaderProps {
  children: React.ReactNode;
  level: number;
  strong: boolean;
  underline: boolean;
  color: string;
  style: CSSProperties;
}

const Header = ({
  children,
  level = 1,
  strong,
  underline,
  color,
  ...props
}: HeaderProps) => {
  let Tag = `h${level}` as HeadingTags;
  if (level < 1 || level > 6) {
    console.warn(
      "Header only accept `1 | 2 | 3 | 4 | 5 | 6` as `level` value."
    );
    Tag = "h1";
  }

  const fontStyle = {
    fontWeight: strong ? "bold" : "normal",
    textDecoration: underline ? "underline" : "undefined",
    color,
  };
  return <Tag style={{ ...props.style, ...fontStyle }}>{children}</Tag>;
};

export default Header;
