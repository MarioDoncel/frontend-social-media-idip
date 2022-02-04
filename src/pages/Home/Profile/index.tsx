import React, { useLayoutEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../../../components/Loading';
import Post from '../../../components/Post';
import UserImage from '../../../components/UserImage';
import { useAppSelector } from '../../../hooks/redux.hooks';
import { IPost } from '../../../interfaces/Post';
import { IUser } from '../../../interfaces/User';
import { api } from '../../../services/api';
import { formatDateOfBirth } from '../../../utils/formatDateOfBirth';

import { ProfileContainer } from './styles';

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { user: loggedUser } = useAppSelector(
    (state) => state.currentUser,
    shallowEqual
  );
  const [user, setUser] = useState(loggedUser);
  const { userId } = useParams();
  const [posts, setPosts] = useState<IPost[]>();

  useLayoutEffect(() => {
    (async () => {
      if (!user.id) return;
      if (!userId) return;
      if (userId !== user.id) {
        const userFetched: IUser = await api
          .get(`users/findbyid/${userId}`)
          .then((res) => res.data);
        setUser(userFetched);
      }
      const postsFetched: IPost[] = await api
        .get(`posts/${userId}`)
        .then((res) => res.data);
      setPosts(postsFetched.reverse());
      setLoading(false);
      console.log('hu');
    })();
  }, []);
  return (
    <ProfileContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="info flex-center card">
            <div className="flex-center header">
              <UserImage src={user.profileImage} alt="Profile" />
              <h2>
                {user.firstName} {user.lastName}
              </h2>
            </div>
            <div className="data">
              <div className="item">
                <p>Date Of Birth:</p>
                <span>{formatDateOfBirth(user.dateOfBirth as string)}</span>
              </div>
              <div className="item">
                <p>Telephone:</p>
                <span>{user.telephone}</span>
              </div>
              <div className="item">
                <p>Email:</p>
                <span>{user.email}</span>
              </div>
              <div className="item">
                <p>Followings:</p>
                <span>{user.followings && user.followings.length}</span>
              </div>
              <div className="item">
                <p>Followers:</p>
                <span>{user.followers && user.followers.length}</span>
              </div>
            </div>
          </div>
          {posts && posts.map((post) => <Post key={post._id} post={post} />)}
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
