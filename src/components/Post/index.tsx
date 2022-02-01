import React from 'react';
import { FcLike, FcLikePlaceholder, FcComments } from 'react-icons/fc';

import { MOCKUSER } from '../../MOCK DATA/user';
import { MOCKPOST } from '../../MOCK DATA/post';

import { PostContainer } from './styles';
import UserInfo from './UserInfo';
import PostImage from './PostImage';

const Post: React.FC = () => {
  return (
    <PostContainer className="card flex-center">
      <UserInfo user={MOCKUSER} postData={MOCKPOST.createdAt} />

      {MOCKPOST.image && <PostImage src={MOCKPOST.image} />}

      <p className="postText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit,
        optio ipsum amet mollitia vero enim aut in assumenda facilis quas, nisi
        natus sint. Est incidunt dolor accusamus perspiciatis nulla.
      </p>
      <div className="actions flex-center">
        <div className="likes">
          <FcLike />
          <span>12</span>
        </div>
        <div className="comments">
          <FcComments />
          <span>5</span>
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
