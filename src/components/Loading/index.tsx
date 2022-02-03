/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { LoadingContainer } from './styles';

const Loading: React.FC = () => {
  return (
    <LoadingContainer className="flex-center">
      <AiOutlineLoading />
      <p>Loading...</p>
    </LoadingContainer>
  );
};

export default Loading;
