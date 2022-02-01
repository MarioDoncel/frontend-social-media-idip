import React from 'react';
import { FcLike, FcLikePlaceholder, FcComments } from 'react-icons/fc';

import { ActionsContainer } from './styles';

const Actions: React.FC = () => {
  return (
    <ActionsContainer className="flex-center">
      <div className="likes">
        <FcLike />
        <span>12</span>
      </div>
      <div className="comments">
        <FcComments />
        <span>5</span>
      </div>
    </ActionsContainer>
  );
};

export default Actions;
