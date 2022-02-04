import React, { HTMLAttributes } from 'react';
import { useNavigate } from 'react-router';
import { api } from '../../services/api';

import { theme } from '../../styles/theme';
import Button from '../Button';

import { ModalDeleteUserContainer } from './styles';

interface IModalDeleteUserProps extends HTMLAttributes<HTMLDivElement> {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDeleteUser: React.FC<IModalDeleteUserProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const navigate = useNavigate();
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleClickDeleteAccount = async () => {
    await api.delete('users/');
    await api.delete('users/logout');
    navigate('/signin', {
      state: { status: 'error', message: 'Account deleted' },
    });
  };
  return (
    <ModalDeleteUserContainer className="flex-center" modalIsOpen={modalIsOpen}>
      <div className="card flex-center">
        <h3>Are you sure to delete account?</h3>
        <Button
          color={theme.color.black}
          text="DELETE"
          onClick={handleClickDeleteAccount}
        />
        <Button color={theme.color.black} text="CANCEL" onClick={closeModal} />
      </div>
    </ModalDeleteUserContainer>
  );
};

export default ModalDeleteUser;
