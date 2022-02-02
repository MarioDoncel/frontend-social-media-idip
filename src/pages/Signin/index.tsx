import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import LogoDescription from '../../components/LogoDescription';
import SubmitInput from '../../components/SubmitInput';
import { SigninContainer } from './style';

export const Signin = () => {
  return (
    <SigninContainer className="flex-center">
      <div className="container flex-center">
        <LogoDescription />
        <form action="" method="post" className="flex-center">
          <h1>Login.</h1>
          <p>
            Not a member?
            <Link to="/signup">
              <span> Create an account here.</span>
            </Link>
          </p>
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <SubmitInput value="Enter" />
        </form>
      </div>
    </SigninContainer>
  );
};
