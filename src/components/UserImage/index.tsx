import React, { ImgHTMLAttributes } from 'react';

import { UserImageContainer } from './styles';

const UserImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
}) => {
  return (
    <UserImageContainer>
      <img src={src} alt={alt} />
    </UserImageContainer>
  );
};

export default UserImage;
