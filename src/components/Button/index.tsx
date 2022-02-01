import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

const Button: React.FC<IButtonProps> = ({ type, text, color }) => {
  return (
    <ButtonContainer color={color} type={type}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
