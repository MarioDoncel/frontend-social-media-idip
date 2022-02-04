/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Post from '../../../components/Post';
import Toastify from '../../../components/Toastify';
import { IPost } from '../../../interfaces/Post';
import { api } from '../../../services/api';
import { popError } from '../../../utils/popError';
import { popSuccess } from '../../../utils/popSuccess';
import { Tstate } from '../../Signin';
import { FeedContainer } from './styles';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { state } = useLocation();

  useEffect(() => {
    if (!state) return
    if ((state as Tstate).status === 'error') {
      popError((state as Tstate).message);
    } else {
      popSuccess((state as Tstate).message);
    }
  }, [state]);

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
          setPosts(postsData.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <FeedContainer>
      <Toastify />
      {posts
        ? posts.map((post) => (
          <Post
            key={post._id}
            post={post && post}
          />
        ))
        : ''}
    </FeedContainer>
  );
};

export default Feed;
