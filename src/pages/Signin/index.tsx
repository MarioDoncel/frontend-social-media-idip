import React, { FormEvent, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import LogoDescription from '../../components/LogoDescription';
import SubmitInput from '../../components/SubmitInput';
import { popError } from '../../utils/popError';
import { SigninContainer } from './style';
import Toastify from '../../components/Toastify';
import { popSuccess } from '../../utils/popSuccess';
import { loginUser } from './utils/loginUser';

export type Tstate = { status: string; message: string };

export const Signin = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmitLogIn = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    await loginUser(form, navigate);
  };
  useEffect(() => {
    if (!state) return;
    if ((state as Tstate).status === 'error') {
      popError((state as Tstate).message);
    } else {
      popSuccess((state as Tstate).message);
    }
  }, [state]);

  return (
    <SigninContainer className="flex-center">
      <Toastify />
      <div className="container flex-center">
        <LogoDescription />
        <form
          action=""
          method="post"
          className="flex-center"
          onSubmit={(e) => handleSubmitLogIn(e)}
        >
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
