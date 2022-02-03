import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/User';

interface IUserState {
  user: Partial<IUser>;
}

const initialState: IUserState = {
  user: {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    telephone: '',
    email: '',
    profileImage: '',
    followings: [],
    followers: [],
  },
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logUser: (state, action: PayloadAction<Partial<IUser>>) => {
      const newUser = { user: { ...state.user, ...action.payload } };
      return newUser;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { logUser, logout } = userSlice.actions;

export default userSlice.reducer;
