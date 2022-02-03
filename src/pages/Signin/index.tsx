import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Error from '../../components/Error';

import Input from '../../components/Input';
import LogoDescription from '../../components/LogoDescription';
import SubmitInput from '../../components/SubmitInput';
import { api } from '../../services/api';
import { popError } from '../../utils/popError';
import { SigninContainer } from './style';

export const Signin = () => {
  const navigate = useNavigate();

  const handleSubmitLogIn = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email: string = form.email.value;
    const password = form.password.value;
    if (!email || !password) {
      return popError('Fill all fields');
    }
    try {
      const user = await api.get('users/login', {
        auth: {
          username: email,
          password,
        },
      });
      navigate('/');
    } catch (error: any) {
      console.error(error);
      // popAlert('error', error.response.data.message);
    }
  };

  return (
    <SigninContainer className="flex-center">
      <Error />
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
