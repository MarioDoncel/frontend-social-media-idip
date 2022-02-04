/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes } from 'react';

// eslint-disable-next-line import/no-cycle
import { InputContainer } from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  secondaryBg?: boolean;
}

const Input: React.FC<IInputProps> = ({
  name,
  type,
  label,
  secondaryBg,
  value,
}) => {
  return (
    <InputContainer secondaryBg={secondaryBg}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} value={value} />
    </InputContainer>
  );
};

export default Input;
