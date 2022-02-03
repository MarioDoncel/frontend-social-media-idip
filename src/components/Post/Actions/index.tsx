import React, { HTMLAttributes, useState } from 'react';
import { FcLike, FcLikePlaceholder, FcComments } from 'react-icons/fc';
import { IPost } from '../../../interfaces/Post';

import { ActionsContainer } from './styles';

interface IActionsProps extends HTMLAttributes<HTMLDivElement> {
  onClickComments: () => void;
  post: IPost;
}

const Actions: React.FC<IActionsProps> = ({ onClickComments, post }) => {
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
        <span>{post.likes?.length}</span>
      </div>
      <div className="comments">
        <FcComments onClick={onClickComments} />
        <span>{post.comments?.length}</span>
      </div>
    </ActionsContainer>
  );
};

export default Actions;
