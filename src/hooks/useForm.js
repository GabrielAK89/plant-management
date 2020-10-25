import { useEffect, useRef, useState } from "react";

export default function useForm(presetValues) {
  const [values, setValues] = useState(presetValues);

  const initialValues = useRef(presetValues);

  useEffect(() => {
    if (presetValues) {
      setValues(presetValues);
    }
  }, [presetValues]);

  function handleInputChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function resetValues() {
    setValues(initialValues.current);
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
