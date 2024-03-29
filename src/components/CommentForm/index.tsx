import React, { FormEvent, FormHTMLAttributes } from 'react';
import { api } from '../../services/api';
import { popSuccess } from '../../utils/popSuccess';
import SubmitInput from '../SubmitInput';
import Textarea from '../Textarea';

import { CommentFormContainer } from './styles';

interface ICommentFormProps extends FormHTMLAttributes<HTMLFormElement> {
  postId: string | undefined;
  commentCreated: (
    comments: { text: string; userId: string; _id: string; createdAt: string }[]
  ) => void;
}

const CommentForm: React.FC<ICommentFormProps> = ({
  postId,
  commentCreated,
}) => {
  const handleSubmitComment = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const text = form.text.value;
    try {
      if (!postId) return;
      const comments: {
        text: string;
        userId: string;
        _id: string;
        createdAt: string;
      }[] = await api
        .post(`posts/${postId}/comment`, { text })
        .then((res) => res.data);
      form.text.value = '';

      commentCreated(comments.reverse());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentFormContainer
      action=""
      method="post"
      className="flex-center"
      onSubmit={handleSubmitComment}
    >
      <Textarea text="Comment" maxLength={150} />
      <SubmitInput />
    </CommentFormContainer>
  );
};

export default CommentForm;
