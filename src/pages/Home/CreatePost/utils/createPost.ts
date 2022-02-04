import { NavigateFunction } from 'react-router';
import { api } from '../../../../services/api';
import { popError } from '../../../../utils/popError';

export const createPost = async (
  form: HTMLFormElement,
  navigate: NavigateFunction
) => {
  const file: File = form.file.files[0];
  const text: string = form.text.value;

  if (!text) {
    return popError('Fill text field');
  }
  const formData = new FormData();
  if (file) formData.append('file', file, file.name);
  formData.append('text', text);

  try {
    const user = await api.post('posts/', formData);
    if (!user) return popError('Error on creating post');
    return navigate('/', {
      state: {
        status: 'success',
        message: 'Post Created.',
      },
    });
  } catch (error: any) {
    return popError(error.response.data.message as string);
  }
};
