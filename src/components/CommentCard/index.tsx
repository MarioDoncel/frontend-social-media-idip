/* eslint-disable react/jsx-no-useless-fragment */
import React, { HTMLAttributes, useLayoutEffect, useState } from 'react';
import { IUser } from '../../interfaces/User';
import { api } from '../../services/api';

import UserImage from '../UserImage';

import { CommentCardContainer } from './styles';

interface ICommentCardProps extends HTMLAttributes<HTMLDivElement> {
  comment: { text: string; userId: string } | undefined;
}
const CommentCard: React.FC<ICommentCardProps> = ({ comment }) => {
  const [profileImage, setProfileImage] = useState(
    'https://via.placeholder.com/150'
  );
  useLayoutEffect(() => {
    (async () => {
      if (!comment) return;
      const userData: IUser = await api
        .get(`users/findbyid/${comment.userId}`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
      if (userData.profileImage) setProfileImage(userData.profileImage);
    })();
  }, []);
  return (
    <CommentCardContainer>
      <UserImage src={profileImage} alt="User" />
      <p>{comment && comment.text}</p>
    </CommentCardContainer>
  );
};

export default CommentCard;
