import { api } from '../services/api';

export const isAuth = async () => {
  const user = await api.get('users/isauth', { withCredentials: true });
  if (user) return user;
  return false;
};
