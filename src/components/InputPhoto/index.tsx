import React, { HTMLAttributes } from 'react';
import { theme } from '../../styles/theme';
import Button from '../Button';

import { InputPhotoContainer } from './styles';

const InputPhoto: React.FC<HTMLAttributes<HTMLDivElement>> = ({ onChange }) => {
  return (
    <InputPhotoContainer>
      <input type="file" accept="image/" name="file" onChange={onChange} />
      <Button
        bgColor={theme.color.black}
        color={theme.color.light}
        text="Choose picture"
        type="button"
      />
    </InputPhotoContainer>
  );
};

export default InputPhoto;
