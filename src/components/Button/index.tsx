import React, { ButtonHTMLAttributes } from 'react';

// eslint-disable-next-line import/no-cycle
import { ButtonContainer } from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color: string;
  bgColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  type,
  text,
  color,
  bgColor,
  onClick,
}) => {
  return (
    <ButtonContainer
      bgColor={bgColor}
      color={color}
      type={type}
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
