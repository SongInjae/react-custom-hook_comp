import type { Meta, StoryObj } from "@storybook/react";

import Upload from "../../components/Upload";

const meta: Meta<typeof Upload> = {
  title: "Component/Upload",
  component: Upload,
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  render: (args) => (
    <>
      <Upload {...args}>
        <button>Click me</button>
      </Upload>
    </>
  ),
};

export const AccessFile: Story = {
  render: (args) => (
    <>
      <Upload {...args}>
        {(file) => <button>{file ? file.name : "Click me"}</button>}
      </Upload>
    </>
  ),
};

export const Droppable: Story = {
  render: (args) => (
    <>
      <Upload droppable {...args}>
        {(file, dragging) => (
          <div
            style={{
              width: 300,
              height: 100,
              border: "4px dashed #aaa",
              borderColor: dragging ? "black" : "#aaa",
            }}
          >
            {file ? file.name : "Click or drag file to this area to upload."}
          </div>
        )}
      </Upload>
    </>
  ),
};
