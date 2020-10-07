import { useEffect, useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    if (initialValues) {
      setValues(initialValues);
    }
  }, [initialValues]);

  function handleInputChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function resetValues() {
    setValues(initialValues);
  }

  function bindInput(name) {
    return {
      name,
      onChange: handleInputChange,
      value: values?.[name] ?? "",
    };
  }

  return {
    values,
    handleInputChange,
    bindInput,
    resetValues,
  };
}
