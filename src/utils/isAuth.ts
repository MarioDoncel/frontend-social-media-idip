import { api } from '../services/api';

export const isAuth = async () => {
  const user = await api.get('/isauth');
  if (user) return user;
  return false;
};
