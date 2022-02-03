import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { RootStateOrAny, useDispatch } from 'react-redux';

import userReducer from './user.store';

const store = configureStore({
  reducer: {
    currentUser: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootStateOrAny, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
