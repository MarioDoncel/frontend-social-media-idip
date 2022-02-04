import React, { FormEvent, HTMLAttributes } from 'react';
import { api } from '../../services/api';

import { theme } from '../../styles/theme';
import { popError } from '../../utils/popError';
import { popSuccess } from '../../utils/popSuccess';
import Button from '../Button';
import Input from '../Input';
import SubmitInput from '../SubmitInput';
import Toastify from '../Toastify';

import { ModalChangePasswordContainer } from './styles';

interface IModalChangePasswordProps extends HTMLAttributes<HTMLDivElement> {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalChangePassword: React.FC<IModalChangePasswordProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handlePasswordSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) return popError('Password do not match');
    await api.patch(`users/`, { password });
    popSuccess('Password Changed');
    setModalIsOpen(false);
    return undefined;
  };
  return (
    <ModalChangePasswordContainer
      className="flex-center"
      modalIsOpen={modalIsOpen}
    >
      <Toastify />
      <div className="card flex-center">
        <form
          action="get"
          className="flex-center"
          onSubmit={handlePasswordSubmit}
        >
          <h3>Insert your new password.</h3>
          <Input type="password" name="password" secondaryBg />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm your password"
            secondaryBg
          />
          <SubmitInput value="Update" />
        </form>
        <Button color={theme.color.danger} text="Cancel" onClick={closeModal} />
      </div>
    </ModalChangePasswordContainer>
  );
};

export default ModalChangePassword;
