import React, { FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputPhoto from '../../../components/InputPhoto';
import { theme } from '../../../styles/theme';
import { setPreviewImage } from '../../../utils/setPreviewImage';

import { SettingsContainer } from './styles';

const Settings: React.FC = () => {
  const [photo, setPhoto] = useState('https://via.placeholder.com/150');
  const handleAvatarChange = (event: FormEvent) => {
    const inputFile = event.target as HTMLInputElement;
    const { files } = inputFile;
    if (files) {
      setPreviewImage(files, setPhoto);
    }
  };

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

        <Input label="First Name" type="text" name="firstName" secondaryBg />
        <Input label="Last Name" type="text" name="lastName" secondaryBg />
        <Input
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          secondaryBg
        />
        <Input label="Telephone" type="text" name="telephone" secondaryBg />
        <Input label="Email" type="email" name="email" secondaryBg />
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
