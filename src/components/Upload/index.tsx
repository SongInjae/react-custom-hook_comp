import styled from "@emotion/styled";
import { useRef, useState } from "react";

interface UploadProps {
  children: React.ReactNode;
  droppable?: boolean;
  name: string;
  accept?: string;
  onChange: (file: File) => void;
  value: File;
}

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Upload = ({
  children,
  droppable = false,
  name,
  accept,
  value,
  onChange,
  ...props
}: UploadProps) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: InputEvent) => {
    const files = e.target && e.target.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  };

  const handleChooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleDragEnter = (e: DragEvent) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    if (
      e.dataTransfer &&
      e.dataTransfer.items &&
      e.dataTransfer?.items.length > 0
    ) {
      setDragging(true);
    }
  };
  const handleDragLeave = (e: DragEvent) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };
  const handleDragOver = (e: DragEvent) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragDrop = (e: DragEvent) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer && e.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <UploadContainer
      onClick={handleChooseFile}
      onDrop={handleDragDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}
    >
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === "function" ? children(file, dragging) : children}
    </UploadContainer>
  );
};
export default Upload;
