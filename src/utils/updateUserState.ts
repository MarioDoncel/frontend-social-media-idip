import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/User';
import { logUser } from '../store/user.store';

export const updateUserState = (user: IUser, dispatch: Dispatch<AnyAction>) => {
  const {
    _id: id,
    firstName,
    lastName,
    dateOfBirth,
    telephone,
    email,
    profileImage,
    followings,
    followers,
  } = user;

  dispatch(
    logUser({
      id,
      firstName,
      lastName,
      dateOfBirth,
      telephone,
      email,
      profileImage,
      followings,
      followers,
    })
  );
};
