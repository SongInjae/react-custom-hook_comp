import type { Meta, StoryObj } from "@storybook/react";

import Modal from "../../components/Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Component/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalHook = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Modal</button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        Hi!
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => <ModalHook />,
};
