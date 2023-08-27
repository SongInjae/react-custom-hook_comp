import styled from "@emotion/styled";
import useToggle from "../../hooks/useToggle";

interface ToggleProps {
  name: string;
  on: boolean;
  disabled: boolean;
  onChange: () => void;
}

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none; // 드래그 되는 것을 방지
`;

const ToggleSwitch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  border-radius: 15px;
  background-color: #ccc;
  box-sizing: border-box;
  transition: background-color 0.2 ease-out;

  &:after {
    content: "";
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.2s ease-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background-color: lightgreen;
  }

  &:checked + div:after {
    left: calc(100% - 26px);
  }

  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;

    &:after {
      opacity: 0.7;
    }
  }
`;

const Toggle = ({
  name,
  on = false,
  disabled,
  onChange,
  ...props
}: ToggleProps) => {
  const [checked, toggle] = useToggle(on);

  const handleToggle = () => {
    toggle();
    onChange && onChange();
  };
  return (
    <ToggleContainer {...props}>
      <ToggleInput
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleToggle}
      />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default Toggle;
