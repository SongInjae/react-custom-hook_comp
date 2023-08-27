import type { Meta, StoryObj } from "@storybook/react";

import BreadCrumb from "../../components/BreadCrumb";

const meta: Meta<typeof BreadCrumb> = {
  title: "Component/BreadCrumb",
  component: BreadCrumb,
};

export default meta;
type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  render: () => (
    <BreadCrumb>
      <BreadCrumb.Item href="/home">Home</BreadCrumb.Item>
      <BreadCrumb.Item href="/level1">Level 1</BreadCrumb.Item>
      <BreadCrumb.Item href="/level2">Level 2</BreadCrumb.Item>
    </BreadCrumb>
  ),
};
