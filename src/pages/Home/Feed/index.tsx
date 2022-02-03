/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useLayoutEffect, useState } from 'react';
import Post from '../../../components/Post';
import { IPost } from '../../../interfaces/Post';
import { api } from '../../../services/api';
import { FeedContainer } from './styles';

const Feed: React.FC = () => {
  const [reRender, setReRender] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  useLayoutEffect(() => {
    (async () => {
      try {
        const postsData: IPost[] = await api
          .get('/posts')
          .then((res) => res.data);
        if (postsData.length > 5) {
          setPosts(postsData.slice(postsData.length - 5, postsData.length)
            .reverse());
        } else {
          setPosts(postsData);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reRender]);
  return (
    <FeedContainer>
      {posts
        ? posts.map((post) => (
          <Post
            key={post._id}
            post={post && post}
            setReRender={setReRender}
          />
        ))
        : ''}
    </FeedContainer>
  );
};

export default Feed;
