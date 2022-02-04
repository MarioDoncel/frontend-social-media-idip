import React, { FormEvent, useLayoutEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputPhoto from '../../../components/InputPhoto';
import { useAppSelector } from '../../../hooks/redux.hooks';
import { theme } from '../../../styles/theme';
import { setPreviewImage } from '../../../utils/setPreviewImage';

import { SettingsContainer } from './styles';

const Settings: React.FC = () => {
  const { user } = useAppSelector((state) => state.currentUser, shallowEqual);
  const [photo, setPhoto] = useState('');
  const handleAvatarChange = (event: FormEvent) => {
    const inputFile = event.target as HTMLInputElement;
    const { files } = inputFile;
    if (files) {
      setPreviewImage(files, setPhoto);
    }
  };
  useLayoutEffect(() => {
    if (user.profileImage) setPhoto(user.profileImage);
  }, []);
  return (
    <SettingsContainer className="">
      <form action="" method="post" className="flex-center card">
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
          value={user.dateOfBirth}
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
        <Button color={theme.color.danger} text="Change Password" />
        <Button color={theme.color.danger} text="Delete Account" />
      </div>
    </SettingsContainer>
  );
};

export default Settings;
