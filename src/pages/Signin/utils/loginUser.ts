import { NavigateFunction } from 'react-router';
import { api } from '../../../services/api';
import { popError } from '../../../utils/popError';

export const loginUser = async (
  form: HTMLFormElement,
  navigate: NavigateFunction
) => {
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

    return navigate('/');
  } catch (error: any) {
    return popError(error.response.data.message as string);
  }
};
