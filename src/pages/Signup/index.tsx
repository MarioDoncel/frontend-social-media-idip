import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import LogoDescription from '../../components/LogoDescription';
import SubmitInput from '../../components/SubmitInput';

import { SignupContainer } from './style';

export const Signup = () => {
  return (
    <SignupContainer className="flex-center">
      <div className="container flex-center">
        <LogoDescription />
        <form action="" method="post" className="flex-center">
          <h1>SignUp.</h1>
          <p>
            Already a member?{' '}
            <Link to="/signin">
              <span>Log in here.</span>
            </Link>
          </p>
          <Input label="First Name" type="text" name="firstName" />
          <Input label="Last Name" type="text" name="lastName" />
          <Input label="Date of Birth" type="date" name="dateOfBirth" />
          <Input label="Telephone" type="text" name="telephone" />
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <SubmitInput value="Create" />
        </form>
      </div>
    </SignupContainer>
  );
};
