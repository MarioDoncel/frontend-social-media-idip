import React from 'react';
import {
  // HashRouter, // or //
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Post from '../components/Post';
import { Home, Page2 } from '../pages/index';

export const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" />
        <Route path="followers" />
        <Route path="followings" />
        <Route path="posts" />
      </Route>
      <Route path="/signin" element={<Page2 />} />
      <Route path="/signup" element={<Page2 />} />
    </Routes>
  </BrowserRouter>
);
