import React, { ImgHTMLAttributes } from 'react';

import { PostImageContainer } from './styles';

const PostImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
}) => {
  return (
    <PostImageContainer>
      <img src={src} alt={alt} />
    </PostImageContainer>
  );
};

export default PostImage;
