import React from 'react';
import UserImage from '../UserImage';

import { CommentCardContainer } from './styles';

const CommentCard: React.FC = () => {
  return (
    <CommentCardContainer>
      <UserImage src="https://github.com/MarioDoncel.png" alt="User" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
        quis rerum quisquam debitis consectetur suscipit, tempore magnam
        perspiciatis atque corporis repellat impedit libero placeat consequuntur
        velit ratione qui nam.
      </p>
    </CommentCardContainer>
  );
};

export default CommentCard;
