/* eslint-disable react/jsx-no-useless-fragment */
import React, { HTMLAttributes, useLayoutEffect, useState } from 'react';
import { IUser } from '../../interfaces/User';
import { api } from '../../services/api';
import { formatDateToPost } from '../../utils/formatDateToPost';

import UserImage from '../UserImage';

import { CommentCardContainer } from './styles';

interface ICommentCardProps extends HTMLAttributes<HTMLDivElement> {
  comment: { text: string; userId: string; createdAt: string } | undefined;
}
const CommentCard: React.FC<ICommentCardProps> = ({ comment }) => {
  const [profileImage, setProfileImage] = useState(
    'https://via.placeholder.com/150'
  );
  const [user, setUser] = useState<IUser>();
  useLayoutEffect(() => {
    (async () => {
      if (!comment) return;
      const userData: IUser = await api
        .get(`users/findbyid/${comment.userId}`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
      setUser(userData);
      if (userData.profileImage) setProfileImage(userData.profileImage);
    })();
  }, []);
  return (
    <CommentCardContainer>
      <div className="info flex-center">
        <UserImage src={profileImage} alt="User" />
        <span className="userName">
          {user && user.lastName}, {user && user.firstName}
        </span>
      </div>
      <div className="text">
        <span className="date">
          {comment && formatDateToPost(comment.createdAt)}
        </span>
        <p>{comment && comment.text}</p>
      </div>
    </CommentCardContainer>
  );
};

export default CommentCard;
