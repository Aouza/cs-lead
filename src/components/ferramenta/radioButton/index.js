import React, { useEffect, useRef } from 'react';
import { Container } from './styles';

import { useField } from '@unform/core';
import ErrorHelper from '../errorHelper';

const RadioButton = ({ label, name, options, ...rest }) => {
  const inputRefs = useRef([]);
  const {
    fieldName,
    registerField,
    error,
    defaultValue = ''
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs) => {
        return refs.find((ref) => ref.checked)?.value || '';
      },
      setValue: (refs, id) => {
        const inputRef = refs.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs) => {
        const inputRef = refs.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      }
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <>
      {options.map((option, index) => {
        return (
          <Container key={index}>
            <input
              ref={(ref) => ref && (inputRefs.current[index] = ref)}
              id={option.id}
              type="radio"
              name={name}
              defaultChecked={defaultValue.includes(option.id)}
              value={option.value}
              {...rest}
            />
            <label htmlFor={option.id} key={option.id}>
              {option.label}
            </label>
            <ErrorHelper>{error}</ErrorHelper>
          </Container>
        );
      })}
    </>
  );
};

export default RadioButton;
