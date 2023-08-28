import React, { ReactElement } from "react";

interface AvatarGroupProps {
  children: React.ReactNode;
  shape: "circle" | "round" | "square";
  size: number;
}

const AvatarGroup = ({
  children,
  shape = "circle",
  size = 70,
  ...props
}: AvatarGroupProps) => {
  const avatars = React.Children.toArray(children)
    .filter((element) => {
      if (React.isValidElement(element) && element.props.__TYPE === "Avatar") {
        return true;
      } else {
        console.warn("Only accepts Avatar as it's children");
        return false;
      }
    })
    .map((avatar, index, avatars) => {
      if (React.isValidElement(avatar)) {
        return React.cloneElement(avatar as ReactElement, {
          ...avatar.props,
          size,
          shape,
          style: {
            ...avatar.props.style,
            marginLeft: -size / 5,
            zIndex: avatars.length - index,
          },
        });
      }
    });
  return (
    <div {...props} style={{ paddingLeft: size / 5 }}>
      {avatars}
    </div>
  );
};

export default AvatarGroup;
