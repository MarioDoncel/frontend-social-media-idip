import React, { Fragment, useState } from 'react';

import { MOCKUSER } from '../../MOCK DATA/user';
import { MOCKPOST } from '../../MOCK DATA/post';

import { PostContainer } from './styles';
import UserInfo from './UserInfo';
import PostImage from './PostImage';
import Actions from './Actions';
import Textarea from '../Textarea';
import SubmitInput from '../SubmitInput';
import UserImage from '../UserImage';
import CommentForm from '../CommentForm';
import CommentCard from '../CommentCard';

const Post: React.FC = () => {
  const [showComments, setShowComments] = useState(false);
  const handleClickComments = () => {
    setShowComments(!showComments);
  };
  return (
    <PostContainer className="card flex-center">
      <UserInfo user={MOCKUSER} postData={MOCKPOST.createdAt} />

      {MOCKPOST.image && <PostImage src={MOCKPOST.image} />}

      <p className="postText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit,
        optio ipsum amet mollitia vero enim aut in assumenda facilis quas, nisi
        natus sint. Est incidunt dolor accusamus perspiciatis nulla.
      </p>
      <Actions onClickComments={handleClickComments} />
      {showComments ? (
        <>
          <CommentForm />
          <CommentCard />
        </>
      ) : (
        ''
      )}
    </PostContainer>
  );
};

export default Post;
