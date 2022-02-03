import React, { HTMLAttributes, useLayoutEffect, useState } from 'react';
import { FcLike, FcLikePlaceholder, FcComments } from 'react-icons/fc';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux.hooks';
import { IPost } from '../../../interfaces/Post';
import { api } from '../../../services/api';

import { ActionsContainer } from './styles';

interface IActionsProps extends HTMLAttributes<HTMLDivElement> {
  comments: { text: string; userId: string; _id: string }[];
  post: IPost;
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
}

const Actions: React.FC<IActionsProps> = ({
  comments,
  post,
  setShowComments,
}) => {
  const { user } = useAppSelector((state) => state.currentUser, shallowEqual);

  const [likes, setLikes] = useState(post.likes);
  const [alreadyLike, setAlreadyLike] = useState(false);
  const onClickComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleLikeClick = () => {
    if (!likes) return;
    if (!user.id) return;
    if (!post._id) return;
    try {
      if (likes.includes(user.id)) {
        api.delete(`posts/${post._id}/dislike`);
        likes.splice(likes.indexOf(user.id), 1);
        setLikes(likes);
      } else {
        api.post(`posts/${post._id}/like`);
        setLikes([...likes, user.id]);
      }
      setAlreadyLike(!alreadyLike);
    } catch (error) {
      console.error(error);
    }
  };
  useLayoutEffect(() => {
    if (!user.id) return;
    if (!likes) return;
    if (likes.includes(user.id)) setAlreadyLike(true);
  }, []);

  return (
    <ActionsContainer className="flex-center start">
      <div className="likes">
        {alreadyLike ? (
          <FcLike onClick={handleLikeClick} />
        ) : (
          <FcLikePlaceholder onClick={handleLikeClick} />
        )}
        <span>{likes && likes.length}</span>
      </div>
      <div className="comments">
        <FcComments onClick={onClickComments} />
        <span>{comments && comments.length}</span>
      </div>
    </ActionsContainer>
  );
};

export default Actions;
