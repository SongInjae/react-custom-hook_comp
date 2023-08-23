import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Text from "../Text";

interface TabItemProps {
  children: React.ReactNode;
  title: string;
  index: string;
  active?: boolean;
}

const TabItemWrapper = styled.div<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  background-color: ${({ active }) => (active ? "#ddf" : "#eee")};
  cursor: pointer;
`;

const TabItem = ({
  children,
  title,
  index,
  active = false,
  ...props
}: TabItemProps) => {
  return (
    <TabItemWrapper active={active} {...props}>
      <Text strong={active}>{title}</Text>
    </TabItemWrapper>
  );
};

TabItem.defaultProps = {
  __TYPE: "Tab.Item",
};

TabItem.propTypes = {
  __TYPE: PropTypes.oneOf(["Tab.Item"]),
};

export default TabItem;
