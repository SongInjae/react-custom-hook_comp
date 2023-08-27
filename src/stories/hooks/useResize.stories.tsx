import type { Meta, StoryObj } from "@storybook/react";
import styled from "@emotion/styled";

import useResize from "../../hooks/useResize";
import Image from "../../components/Image";
import { useState } from "react";

const meta: Meta<typeof useResize> = {
  title: "Hook/useResize",
};

export default meta;
type Story = StoryObj<typeof useResize>;

const Background = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
`;

const ReSizeHooks = () => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const ref = useResize((rect) => {
    setImageSize({ width: rect.width, height: rect.height });
  });

  return (
    <Background ref={ref}>
      <Image
        width={imageSize.width}
        height={imageSize.height}
        src="https://picsum.photos/1000"
        mode="contain"
      />
    </Background>
  );
};

export const Default: Story = {
  render: () => <ReSizeHooks />,
};
