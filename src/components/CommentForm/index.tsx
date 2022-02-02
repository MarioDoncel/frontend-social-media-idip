import React from 'react';
import SubmitInput from '../SubmitInput';
import Textarea from '../Textarea';

import { CommentFormContainer } from './styles';

const CommentForm: React.FC = () => {
  return (
    <CommentFormContainer action="" method="post" className="flex-center">
      <Textarea text="Comment" maxLength={150} />
      <SubmitInput />
    </CommentFormContainer>
  );
};

export default CommentForm;
