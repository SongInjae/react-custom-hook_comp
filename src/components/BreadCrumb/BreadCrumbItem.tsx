import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Text from "../Text";
import Icon from "../Icon";

interface BreadCrumbItemProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

const BreadCrumbContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const BreadCrumbItem = ({
  children,
  href,
  active,
  ...props
}: BreadCrumbItemProps) => {
  return (
    <BreadCrumbContainer {...props}>
      <Anchor href={href}>
        <Text size={14} strong={active}>
          {children}
        </Text>
      </Anchor>
      {!active && <Icon name="chevron-right" size={22} strokeWidth={1} />}
    </BreadCrumbContainer>
  );
};

BreadCrumbItem.defaultProps = {
  __TYPE: "BreadCrumbItem",
};

BreadCrumbItem.propTypes = {
  __TYPE: PropTypes.string,
};

export default BreadCrumbItem;
