import React, { useCallback, useEffect, useState, useRef } from "react";
import { Container } from "./styles";

import { useField } from "@unform/core";
import ErrorHelper from "../errorHelper";

const Input = ({ name, id, label, value, autoComplete, onChange, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    inputRef.current?.value ? setIsFilled(true) : setIsFilled(false);
  }, []);
  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <input
        id={id}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        min={0}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
      <ErrorHelper> {error}</ErrorHelper>
    </Container>
  );
};

export default Input;
