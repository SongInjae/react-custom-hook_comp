import type { Meta, StoryObj } from "@storybook/react";
import styled from "@emotion/styled";

import useHover from "../../hooks/useHover";

const meta: Meta<typeof useHover> = {
  title: "Hook/useHover",
};

export default meta;
type Story = StoryObj<typeof useHover>;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const HoverHooks = () => {
  const [ref, hover] = useHover();

  return (
    <>
      <Box ref={ref} />
      {hover ? "True" : "False"}
    </>
  );
};

export const Default: Story = {
  render: () => <HoverHooks />,
};
