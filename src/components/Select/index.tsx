import styled from "@emotion/styled";
import { Attributes } from "react";

interface selectProps {
  data: Array<optionsProps | string>;
  label: string;
  placeholder: string;
  block: boolean;
  invalid: boolean;
  required: boolean;
  disabled: boolean;
  wrapperProps: Attributes;
}

interface optionsProps {
  value: string;
  label: string;
}

const Wrpaaer = styled.div<{ block: boolean }>`
  display: ${({ block }) => (block ? "block" : "inline-block")};
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const StyledSelect = styled.select<{ invalid: boolean }>`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? "red" : "gray")};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = ({
  data,
  label,
  placeholder,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  wrapperProps,
  ...props
}: selectProps) => {
  const formattedData = data.map((item: optionsProps | string) =>
    typeof item === "string" ? { label: item, value: item } : item
  );

  const options = formattedData.map((item: optionsProps) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  if (placeholder) {
    options.unshift(
      <option key="placeholder" value="" hidden>
        {placeholder}
      </option>
    );
  }

  return (
    <Wrpaaer block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledSelect
        invalid={invalid}
        required={required}
        disabled={disabled}
        {...props}
      >
        {options}
      </StyledSelect>
    </Wrpaaer>
  );
};

export default Select;
