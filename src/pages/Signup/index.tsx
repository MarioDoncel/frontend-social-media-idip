import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import InputPhoto from '../../components/InputPhoto';
import LogoDescription from '../../components/LogoDescription';
import SubmitInput from '../../components/SubmitInput';
import Toastify from '../../components/Toastify';
import { setPreviewImage } from '../../utils/setPreviewImage';
import { SignupContainer } from './style';
import { createUser } from './utils/createUser';

export const Signup = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState('https://via.placeholder.com/150');
  const handleAvatarChange = (event: FormEvent) => {
    const inputFile = event.target as HTMLInputElement;
    const { files } = inputFile;
    if (files) {
      setPreviewImage(files, setPhoto);
    }
  };
  const handleSubmitSignUp = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    await createUser(form, navigate);
  };
  return (
    <SignupContainer className="flex-center">
      <Toastify />
      <div className="container flex-center">
        <LogoDescription />
        <form
          action=""
          method="post"
          className="flex-center"
          onSubmit={(e) => handleSubmitSignUp(e)}
        >
          <h1>SignUp.</h1>
          <p>
            Already a member?{' '}
            <Link to="/signin">
              <span>Log in here.</span>
            </Link>
          </p>
          <div className="profileImage flex-center">
            <InputPhoto onChange={handleAvatarChange} />
            {photo ? (
              <div className="photoPreview">
                <img src={photo} alt="profilePhoto" />
              </div>
            ) : (
              ''
            )}
          </div>
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
