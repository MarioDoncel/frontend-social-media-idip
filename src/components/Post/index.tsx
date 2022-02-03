/* eslint-disable prettier/prettier */
import React, {
  Fragment,
  HTMLAttributes,
  useLayoutEffect,
  useState,
} from 'react';

import { PostContainer } from './styles';
import UserInfo from './UserInfo';
import PostImage from './PostImage';
import Actions from './Actions';
import CommentForm from '../CommentForm';
import CommentCard from '../CommentCard';
import { api } from '../../services/api';
import { IPost } from '../../interfaces/Post';
import { IUser } from '../../interfaces/User';

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
  post?: IPost;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [user, setUser] = useState<IUser>();
  const handleClickComments = () => {
    setShowComments(!showComments);
  };
  useLayoutEffect(() => {
    (async () => {
      const userData: IUser = await api
        .get(`users/findbyid/${(post as IPost).userId}`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
      if (userData) setUser(userData);
    })();
  }, []);
  return (
    <PostContainer className="card flex-center">
      {user && post ? (
        <>
          <UserInfo
            user={user}
            postData={post ? (post.createdAt as Date) : ''}
          />

          <PostImage src={post.image} />

          <p className="postText">{post && post.text}</p>
          <Actions onClickComments={handleClickComments} post={post} />
          {showComments && <CommentForm />}
          {showComments
            ? post.comments?.map((comment, index) => {
              return <CommentCard key={comment._id} comment={comment} />
            })
            : ''}
        </>
      ) : (
        ''
      )}
    </PostContainer>
  );
};

export default Post;
