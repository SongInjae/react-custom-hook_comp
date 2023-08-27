import styled from "@emotion/styled";

interface BadgeProps {
  children: React.ReactNode;
  count: number;
  maxCount: number;
  dot: boolean;
  backgroundColor: string;
  textColor: string;
}

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Super = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  color: white;
  border-radius: 20px;
  background-color: #f44;
  transform: translate(50%, -50%);

  &.dot {
    padding: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

const Badge = ({
  children,
  count,
  maxCount,
  dot = false,
  backgroundColor,
  textColor,
  ...props
}: Partial<BadgeProps>) => {
  const colorStyle = {
    backgroundColor,
    color: textColor,
  };

  let badge = null;

  if (count) {
    badge = (
      <Super style={colorStyle}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </Super>
    );
  } else {
    if (count !== undefined) {
      badge = null;
    } else if (dot) {
      badge = <Super className="dot" style={colorStyle}></Super>;
    }
  }
  return (
    <BadgeContainer {...props}>
      {children}
      {badge}
    </BadgeContainer>
  );
};

export default Badge;
