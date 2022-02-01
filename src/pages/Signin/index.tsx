import React from 'react';
import { GiMightyForce } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import { SigninContainer } from './style';

export const Signin = () => {
  return (
    <SigninContainer className="flex-center">
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
          <h1>Login.</h1>
          <p>
            Not a member?
            <Link to="/signup">
              <span> Create an account here.</span>
            </Link>
          </p>
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </SigninContainer>
  );
};
