import React, { HTMLAttributes } from 'react';

import { NewComponentContainer } from './styles';

const NewComponent = ({
  onClick,
  children,
}: HTMLAttributes<HTMLDivElement>) => (
  <NewComponentContainer onClick={onClick}>{children}</NewComponentContainer>
);

export default NewComponent;
