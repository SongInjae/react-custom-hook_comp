import { FormEvent, useState } from "react";

interface useFormProps {
  initialValue: any;
  onSubmit: (values: any) => void;
  validate: (values: any) => any;
}

const useForm = ({ initialValue, onSubmit, validate }: useFormProps) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const newErrors = validate ? validate(values) : {};

    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
    }

    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
