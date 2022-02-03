/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { ImgHTMLAttributes } from 'react';

import { UserImageContainer } from './styles';

const UserImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  onClick,
}) => {
  return (
    <UserImageContainer className="userImage">
      <img src={src} alt={alt} onClick={onClick} />
    </UserImageContainer>
  );
};

export default UserImage;
