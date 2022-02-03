/* eslint-disable prettier/prettier */
import React, {
  Fragment,
  HTMLAttributes,
  useLayoutEffect,
  useState,
} from 'react';

import { useLocation, useNavigate } from 'react-router';
import { PostContainer } from './styles';
import UserInfo from './UserInfo';
import PostImage from './PostImage';
import Actions from './Actions';
import CommentForm from '../CommentForm';
import CommentCard from '../CommentCard';
import { api } from '../../services/api';
import { IPost } from '../../interfaces/Post';
import { IUser } from '../../interfaces/User';
import { popSuccess } from '../../utils/popSuccess';
import Toastify from '../Toastify';
import { Tstate } from '../../pages/Signin';
import { popError } from '../../utils/popError';

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
  post?: IPost;
  setReRender?: React.Dispatch<React.SetStateAction<boolean>>
}

const Post: React.FC<IPostProps> = ({ post, setReRender }) => {
  const [showComments, setShowComments] = useState(false);
  const [user, setUser] = useState<IUser>();
  const handleClickComments = () => {
    setShowComments(!showComments);
  };
  const commentCreated = async () => {
    setShowComments(false)
    popSuccess('Comment Posted');
    if (setReRender) setReRender(prev => !prev)
  }
  useLayoutEffect(() => {
    if (!post) return
    if (post.comments) post.comments.reverse();

    (async () => {
      const userData: IUser = await api
        .get(`users/findbyid/${(post).userId}`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
      if (userData) setUser(userData);
    })();
  }, []);
  return (
    <PostContainer className="card flex-center">
      <Toastify />
      {user && post ? (
        <>
          <UserInfo
            user={user}
            postData={post ? (post.createdAt as Date) : ''}
          />

          <PostImage src={post.image} />

          <p className="postText">{post && post.text}</p>
          <Actions onClickComments={handleClickComments} post={post} />
          {showComments && <CommentForm postId={post._id}
            commentCreated={commentCreated} />}
          {showComments
            ? post.comments?.map((comment) => {
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
