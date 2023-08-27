import type { Meta, StoryObj } from "@storybook/react";

import useDebounce from "../../hooks/useDebounce";
import { Fragment, useState } from "react";

const meta: Meta<typeof useDebounce> = {
  title: "Hook/useDebounce",
};

export default meta;
type Story = StoryObj<typeof useDebounce>;

const companies = ["Grepp", "KaKao", "Naver", "Coupang", "Line", "Woowahan"];

const DebounceHooks = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Array<string>>([]);

  useDebounce(
    () => {
      if (value === "") setResult([]);
      else {
        setResult(
          companies.filter((company) =>
            company.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    },
    300,
    [value]
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        {result.map((item) => (
          <Fragment key={item}>
            {item}
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <DebounceHooks />,
};
