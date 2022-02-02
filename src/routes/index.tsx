import React from 'react';
import {
  // HashRouter, // or //
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, Signup } from '../pages/index';
import { Signin } from '../pages/Signin';

export const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" />
        <Route path="followers" />
        <Route path="followings" />
        <Route path="posts" />
        <Route path="theme" />
        <Route path="settings" />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
