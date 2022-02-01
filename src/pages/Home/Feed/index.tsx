import React from 'react';
import Post from '../../../components/Post';
import { FeedContainer } from './styles';

const Feed: React.FC = () => {
  return (
    <FeedContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </FeedContainer>
  );
};

export default Feed;
