import React, { HTMLAttributes } from 'react';
import { IUser } from '../../../interfaces/User';
import UserImage from '../../UserImage';

import { LoggedUserContainer } from './styles';

interface ILoggedUserProps extends HTMLAttributes<HTMLDivElement> {
  user: Partial<IUser>;
}
const LoggedUser: React.FC<ILoggedUserProps> = ({ user }) => {
  return (
    <LoggedUserContainer className="card flex-center">
      <UserImage src={user.profileImage} alt="ProfileImage" />
      <div className="text">
        <p>
          {user.firstName} {user.lastName}
        </p>
        <span>
          {`@${(user.firstName as string).charAt(0)}${user.lastName as string}`}
        </span>
      </div>
    </LoggedUserContainer>
  );
};

export default LoggedUser;
