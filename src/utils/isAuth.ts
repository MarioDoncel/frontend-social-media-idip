import { IUser } from '../interfaces/User';
import { api } from '../services/api';

export const isAuth = async () => {
  const response = await api.get<IUser>('users/isauth', {
    withCredentials: true,
  });

  if (response) return response.data;
  return false;
};
