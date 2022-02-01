import React from 'react';
import Post from '../../../components/Post';

import { PostsContainer } from './styles';

const Posts: React.FC = () => {
  return (
    <PostsContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostsContainer>
  );
};

export default Posts;
