import styled from "@emotion/styled";
import { Attributes } from "react";

interface InputProp {
  label: string;
  block: boolean;
  invalid: boolean;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  wrapperProps: Attributes;
}

const Wrapper = styled.div<{ block: boolean }>`
  display: ${({ block }) => (block ? "block" : "inline-block")};
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const StyledInput = styled.input<{ invalid: boolean }>`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? "red" : "gray")};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Input = ({
  label,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readonly = false,
  wrapperProps,
  ...props
}: InputProp) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledInput
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
