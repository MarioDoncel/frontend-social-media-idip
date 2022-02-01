/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<IInputProps> = ({ name, type, label }) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} />
    </InputContainer>
  );
};

export default Input;
