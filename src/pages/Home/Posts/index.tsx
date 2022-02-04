import React, { useLayoutEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import Post from '../../../components/Post';
import { useAppSelector } from '../../../hooks/redux.hooks';
import { IPost } from '../../../interfaces/Post';
import { api } from '../../../services/api';

import { PostsContainer } from './styles';

const Posts: React.FC = () => {
  const { user } = useAppSelector((state) => state.currentUser, shallowEqual);

  const [posts, setPosts] = useState<IPost[]>();

  useLayoutEffect(() => {
    (async () => {
      if (!user.id) return;
      const postsFetched: IPost[] = await api
        .get(`posts/${user.id}`)
        .then((res) => res.data);
      setPosts(postsFetched.reverse());
    })();
  }, []);

  return (
    <PostsContainer>
      {posts && posts[0] ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h2 className="flex-center">Did not found any post for your account</h2>
      )}
    </PostsContainer>
  );
};

export default Posts;
