import React, { TextareaHTMLAttributes } from 'react';

import { TextareaContainer } from './styles';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text: string;
  maxLength: number;
}

const Textarea: React.FC<ITextareaProps> = ({ text, maxLength }) => {
  return (
    <TextareaContainer>
      <h5>{text}</h5>
      <textarea
        name="text"
        maxLength={500}
        id="text"
        cols={30}
        rows={10}
        placeholder={`Max: ${maxLength} characters`}
      />
    </TextareaContainer>
  );
};

export default Textarea;
