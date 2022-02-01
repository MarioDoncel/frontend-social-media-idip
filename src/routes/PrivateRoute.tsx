/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ children }: any) => {
  const [auth, setAuth] = useState(true);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  // eslint-disable-next-line no-nested-ternary
  return loading ? <Header /> : auth ? children : <Navigate to="/test" />;
};
