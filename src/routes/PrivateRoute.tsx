/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { logUser } from '../store/user.store';
import { isAuth } from '../utils/isAuth';

export const PrivateRoute = ({ children }: any) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    (async () => {
      try {
        const user = await isAuth();
        if (user) {
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

          setAuth(true);
          setLoading(false);
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
