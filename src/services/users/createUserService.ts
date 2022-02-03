import { IUser } from '../../interfaces/User';
import { api } from '../api';

export const createUserService = async (body: Partial<IUser>) => {
  const user = await api.post('users', body);
  return user;
};
