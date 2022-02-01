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
        <Route path="/" element={<Post />} />
        <Route path="followers" element={<Post />} />
      </Route>
      <Route path="/signin" element={<Page2 />} />
      <Route path="/signup" element={<Page2 />} />
    </Routes>
  </BrowserRouter>
);
