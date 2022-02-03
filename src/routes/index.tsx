import React from 'react';
import {
  // HashRouter, // or //
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CreatePost from '../pages/Home/CreatePost';
import Feed from '../pages/Home/Feed';
import Followers from '../pages/Home/Followers';
import Followings from '../pages/Home/Followings';
import Posts from '../pages/Home/Posts';
import Profile from '../pages/Home/Profile';
import SearchResults from '../pages/Home/SearchResults';
import Settings from '../pages/Home/Settings';

import { Home, Signup } from '../pages/index';
import { Signin } from '../pages/Signin';
import { PrivateRoute } from './PrivateRoute';

export const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Feed />} />
        <Route path="followers" element={<Followers />} />
        <Route path="followings" element={<Followings />} />
        <Route path="posts" element={<Posts />} />
        <Route path="theme" element={<Posts />} />
        <Route path="settings" element={<Settings />} />
        <Route path="searchResults" element={<SearchResults />} />
        <Route path="createpost" element={<CreatePost />} />
        <Route path="profile/:userid" element={<Profile />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
