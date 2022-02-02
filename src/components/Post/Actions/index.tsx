import React, { HTMLAttributes, useState } from 'react';
import { FcLike, FcLikePlaceholder, FcComments } from 'react-icons/fc';

import { ActionsContainer } from './styles';

interface IActionsProps extends HTMLAttributes<HTMLDivElement> {
  onClickComments: () => void;
}

const Actions: React.FC<IActionsProps> = ({ onClickComments }) => {
  const [alreadyLike, setAlreadyLike] = useState(false);
  const handleLikeClick = () => {
    setAlreadyLike(!alreadyLike);
  };

  return (
    <ActionsContainer className="flex-center start">
      <div className="likes">
        {alreadyLike ? (
          <FcLike onClick={handleLikeClick} />
        ) : (
          <FcLikePlaceholder onClick={handleLikeClick} />
        )}
        <span>12</span>
      </div>
      <div className="comments">
        <FcComments onClick={onClickComments} />
        <span>5</span>
      </div>
    </ActionsContainer>
  );
};

export default Actions;
