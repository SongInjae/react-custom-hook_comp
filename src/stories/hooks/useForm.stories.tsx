import type { Meta, StoryObj } from "@storybook/react";

import useForm from "../../hooks/useForm";

const meta: Meta<typeof useForm> = {
  title: "Hook/useForm",
};

export default meta;
type Story = StoryObj<typeof useForm>;

interface errorType {
  email: string;
  password: string;
}

const FormHooks = () => {
  const { isLoading, errors, handleChange, handleSubmit } = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
    },
    validate: ({ email, password }) => {
      const errors = {} as errorType;
      if (!email) errors.email = "이메일을 입력하세요.";
      if (!password) errors.password = "비밀번호를 입력하세요.";
      if (!/^.+@.+\..+$/.test(email))
        errors.email = "올바른 이메일을 입력하세요.";
      return errors;
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sing In</h1>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {(errors as errorType).email}
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {(errors as errorType).password}
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export const Default: Story = {
  render: () => <FormHooks />,
};
