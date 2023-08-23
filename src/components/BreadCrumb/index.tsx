import React from "react";
import styled from "@emotion/styled";
import BreadCrumbItem from "./BreadCrumbItem";

interface BreadCrumbProps {
  children: React.ReactNode;
}

const BreadCrumbContainer = styled.nav`
  display: inline-block;
`;

const BreadCrumb = ({ children, ...props }: BreadCrumbProps) => {
  const items = React.Children.toArray(children)
    .filter((element) => {
      if (
        React.isValidElement(element) &&
        element.props.__TYPE === "BreadCrumbItem"
      ) {
        return true;
      } else {
        console.warn("Only accepts BreadCrumbs.Item as it's children");
        return false;
      }
    })
    .map((element, index, elements) => {
      if (React.isValidElement(element)) {
        return React.cloneElement(element as React.ReactElement, {
          ...element.props,
          active: index === elements.length - 1,
        });
      }
      return element;
    });
  return <BreadCrumbContainer {...props}>{items}</BreadCrumbContainer>;
};

BreadCrumb.Item = BreadCrumbItem;

export default BreadCrumb;
