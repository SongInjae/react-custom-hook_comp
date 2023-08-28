import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import ImageComponent from "../Image";
import AvatarGroup from "./AvatarGroup";

type shapeType = "circle" | "round" | "square";
interface ShapeToCssValueType {
  circle: string;
  round: string;
  square: string;
}

interface AvatarProps {
  lazy?: boolean;
  threshold?: number;
  src: string;
  size: number;
  shape: shapeType;
  placeholder?: string;
  alt?: string;
  mode: "cover" | "fill" | "contain";
}

const ShapeToCssValue: ShapeToCssValueType = {
  circle: "50%",
  round: "4px",
  square: "0px",
};

const AvatarWrapper = styled.div<{ shape: shapeType }>`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  overflow: hidden;
  background-color: #eee;

  > img {
    transition: opacity 0.2s ease-out;
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = "circle",
  placeholder,
  alt,
  mode = "cover",
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  });
  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  __TYPE: "Avatar",
};
Avatar.propTypes = {
  __TYPE: PropTypes.string,
};

Avatar.Group = AvatarGroup;

export default Avatar;
