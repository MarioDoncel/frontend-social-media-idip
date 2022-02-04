import React, { FormEvent, useLayoutEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputPhoto from '../../../components/InputPhoto';
import ModalChangePassword from '../../../components/ModalChangePassword';
import ModalDeleteUser from '../../../components/ModalDeleteUser';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks';

import { theme } from '../../../styles/theme';
import { formatDateToForm } from '../../../utils/formatDateToForm';
import { setPreviewImage } from '../../../utils/setPreviewImage';

import { SettingsContainer } from './styles';
import { updateUser } from './utils/updateUser';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPasswordIsOpen, setModalPasswordIsOpen] = useState(false);
  const { user } = useAppSelector((state) => state.currentUser, shallowEqual);
  const [photo, setPhoto] = useState('');
  const handleAvatarChange = (event: FormEvent) => {
    const inputFile = event.target as HTMLInputElement;
    const { files } = inputFile;
    if (files) {
      setPreviewImage(files, setPhoto);
    }
  };
  const handleSubmitUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    await updateUser(form, user, navigate, dispatch);
  };
  const handleDeleteUserClick = () => {
    setModalIsOpen(true);
  };
  const handleChangePasswordClick = () => {
    setModalPasswordIsOpen(true);
  };

  useLayoutEffect(() => {
    if (user.profileImage) setPhoto(user.profileImage);
  }, []);
  return (
    <SettingsContainer className="">
      <ModalDeleteUser
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <ModalChangePassword
        modalIsOpen={modalPasswordIsOpen}
        setModalIsOpen={setModalPasswordIsOpen}
      />

      <form
        action=""
        method="post"
        className="flex-center card"
        onSubmit={handleSubmitUpdate}
      >
        <h3>Update informations</h3>
        <InputPhoto onChange={handleAvatarChange} />
        {photo ? (
          <div className="photoPreview">
            <img src={photo} alt="profilePhoto" />
          </div>
        ) : (
          ''
        )}

        <Input
          label="First Name"
          type="text"
          name="firstName"
          secondaryBg
          value={user.firstName}
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          secondaryBg
          value={user.lastName}
        />
        <Input
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          secondaryBg
          value={formatDateToForm(user.dateOfBirth as string)}
        />
        <Input
          label="Telephone"
          type="text"
          name="telephone"
          secondaryBg
          value={user.telephone}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          secondaryBg
          value={user.email}
        />
        <input type="submit" value="Send" />
      </form>
      <div className="highRiskOptions card">
        <Button
          color={theme.color.danger}
          text="Change Password"
          onClick={handleChangePasswordClick}
        />
        <Button
          color={theme.color.danger}
          text="Delete Account"
          onClick={handleDeleteUserClick}
        />
      </div>
    </SettingsContainer>
  );
};

export default Settings;
