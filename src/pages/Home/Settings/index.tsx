import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { theme } from '../../../styles/theme';

import { SettingsContainer } from './styles';

const Settings: React.FC = () => {
  return (
    <SettingsContainer className="card">
      <form action="" method="post" className="flex-center">
        <h3>Update informations</h3>
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
      <div className="highRiskOptions">
        <Button color={theme.color.danger} text="Change Password" />
        <Button color={theme.color.danger} text="Delete Account" />
      </div>
    </SettingsContainer>
  );
};

export default Settings;
