import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import TabItem from "./TabItem";

interface TabProps {
  children: React.ReactNode;
  active?: boolean;
}

interface childrenToArrayProps {
  children: React.ReactNode;
  types: string | Array<string>;
}

const childrenToArray = ({ children, types }: childrenToArrayProps) => {
  return React.Children.toArray(children).filter((element) => {
    if (React.isValidElement(element) && types.includes(element.props.__TYPE)) {
      return true;
    }
    console.warn(
      `Only accepts ${
        Array.isArray(types) ? types.join(", ") : types
      } as It's children`
    );
    return false;
  });
};

const TabContainer = styled.div`
  border-bottom: 2px solid #ddd;
  background-color: #eee;
`;

const Tab = ({ children, active }: TabProps) => {
  const [currentActive, setCurrentActive] = useState(() => {
    if (active) {
      return active;
    } else {
      const index = (
        childrenToArray({
          children,
          types: "Tab.Item",
        })[0] as React.ReactElement<{ index: string }>
      ).props.index;
      return index;
    }
  });

  const items = useMemo(() => {
    return childrenToArray({ children, types: "Tab.Item" }).map((element) => {
      if (React.isValidElement(element)) {
        return React.cloneElement(element as React.ReactElement, {
          ...element.props,
          key: element.props.index,
          active: element.props.index === currentActive,
          onClick: () => {
            setCurrentActive(element.props.index);
          },
        });
      }
      return element;
    });
  }, [children, currentActive]);

  const activeItem = useMemo(
    () =>
      items.find(
        (element) =>
          currentActive ===
          (element as React.ReactElement<{ index: string }>).props.index
      ),
    [currentActive, items]
  );

  return (
    <div>
      <TabContainer>{items}</TabContainer>
      <div>{(activeItem as React.ReactElement).props.children}</div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
