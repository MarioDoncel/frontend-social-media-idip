import React, { InputHTMLAttributes } from 'react';

import { SubmitInputContainer } from './styles';

const SubmitInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
}) => {
  return <SubmitInputContainer type="submit" value={value} />;
};

export default SubmitInput;
