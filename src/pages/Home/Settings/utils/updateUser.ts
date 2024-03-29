/* eslint-disable prettier/prettier */
import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { NavigateFunction } from 'react-router';
import { IUser } from '../../../../interfaces/User';
import { api } from '../../../../services/api';
import { logUser } from '../../../../store/user.store';
import { popError } from '../../../../utils/popError';
import { updateUserState } from '../../../../utils/updateUserState';

export const updateUser = async (
  form: HTMLFormElement,
  user: Partial<IUser>,
  navigate: NavigateFunction,
  dispatch: Dispatch<AnyAction>
) => {
  const file: File = form.file.files[0];
  const firstName: string = form.firstName.value;
  const lastName: string = form.lastName.value;
  const dateOfBirth: string = form.dateOfBirth.value;
  const telephone: string = form.telephone.value;
  const email: string = form.email.value;


  if (
    !email ||
    !firstName ||
    !lastName ||
    !dateOfBirth ||
    !telephone
  ) {
    return popError('Fill all fields');
  }
  const formData = new FormData();
  if (file) formData.append('file', file, file.name);
  formData.append('email', email);
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('dateOfBirth', dateOfBirth);
  formData.append('telephone', telephone);
  try {
    const updatedUser: IUser = await api
      .patch('users/', formData)
      .then((res) => res.data);
    if (!updatedUser) return popError('Error on creating user');
    dispatch(logUser({ ...updatedUser, id: updatedUser._id }))
    return navigate('/', {
      state: {
        status: 'success',
        message: `User Updated.${email !== user.email
          ? 'Please check your email to confirm the new email'
          : ''
          }`,
      },
    });
  } catch (error: any) {
    return popError(error.response.data.message as string);
  }
};
