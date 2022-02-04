/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useLayoutEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { useAppDispatch } from '../store';
import { logUser } from '../store/user.store';
import { isAuth } from '../utils/isAuth';
import { updateUserState } from '../utils/updateUserState';

export const PrivateRoute = ({ children }: any) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    (async () => {
      try {
        const user = await isAuth();
        if (user) {
          updateUserState(user, dispatch);
          setAuth(true);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  // eslint-disable-next-line no-nested-ternary
  return loading ? (
    <Loading />
  ) : auth ? (
    children
  ) : (
    <Navigate
      to="/signin"
      state={{ status: 'error', message: 'Please Login' }}
    />
  );
};
