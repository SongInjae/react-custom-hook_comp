import type { Meta, StoryObj } from "@storybook/react";
import styled from "@emotion/styled";

import useClickAway from "../../hooks/useClickAway";
import { useState } from "react";

const meta: Meta<typeof useClickAway> = {
  title: "Hook/useClickAway",
};

export default meta;
type Story = StoryObj<typeof useClickAway>;

const Popover = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: #eee;
`;

const HoverHooks = () => {
  const [show, setShow] = useState(false);
  const ref = useClickAway((e) => {
    if ((e.target as HTMLElement).tagName !== "BUTTON") {
      setShow(false);
    }
  });
  return (
    <div>
      <button onClick={() => setShow(true)}>Show</button>
      <Popover ref={ref} style={{ display: show ? "block" : "none" }}>
        Popover
      </Popover>
    </div>
  );
};

export const Default: Story = {
  render: () => <HoverHooks />,
};
