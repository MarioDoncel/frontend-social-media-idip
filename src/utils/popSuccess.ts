import { toast } from 'react-toastify';

export const popSuccess = (text: string) => {
  return toast.success(text, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
