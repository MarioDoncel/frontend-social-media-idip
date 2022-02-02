/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  secondaryBg?: boolean;
}

const Input: React.FC<IInputProps> = ({ name, type, label, secondaryBg }) => {
  return (
    <InputContainer secondaryBg={secondaryBg}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} />
    </InputContainer>
  );
};

export default Input;
