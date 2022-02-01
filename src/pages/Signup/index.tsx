import React from 'react';
import { GiMightyForce } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import { SignupContainer } from './style';

export const Signup = () => {
  return (
    <SignupContainer className="flex-center">
      <div className="container flex-center">
        <div className="logo  flex-center">
          <GiMightyForce />
          <h1>MOTIVATE </h1>
          <h1> SOCIAL</h1>
          <hr />
          <p>
            A social media to post encouraging texts and images that can help
            people reach their better version of themselves
          </p>
        </div>
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
          <input type="submit" value="Criar" />
        </form>
      </div>
    </SignupContainer>
  );
};
