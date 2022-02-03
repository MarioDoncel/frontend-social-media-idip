import { NavigateFunction } from 'react-router';
import { api } from '../../../services/api';
import { popError } from '../../../utils/popError';

export const createUser = async (
  form: HTMLFormElement,
  navigate: NavigateFunction
) => {
  const file: File = form.file.files[0];
  const firstName: string = form.firstName.value;
  const lastName: string = form.lastName.value;
  const dateOfBirth: string = form.dateOfBirth.value;
  const telephone: string = form.telephone.value;
  const email: string = form.email.value;
  const password: string = form.password.value;

  if (
    !email ||
    !password ||
    !firstName ||
    !lastName ||
    !dateOfBirth ||
    !telephone
  ) {
    return popError('Fill all fields');
  }
  const formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('email', email);
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('dateOfBirth', dateOfBirth);
  formData.append('telephone', telephone);
  formData.append('password', password);
  try {
    const user = await api.post('users/', formData);
    if (!user) return popError('Error on creating user');
    return navigate('/signin', {
      state: {
        status: 'success',
        message: 'User Created. Verify your email to confirm your account.',
      },
    });
  } catch (error: any) {
    return popError(error.response.data.message as string);
  }
};
