import React, { FormEvent, useState } from 'react';
import InputPhoto from '../../../components/InputPhoto';
import SubmitInput from '../../../components/SubmitInput';
import Textarea from '../../../components/Textarea';
import { setPreviewImage } from '../../../utils/setPreviewImage';

import { CreatePostContainer } from './styles';

const CreatePost: React.FC = () => {
  const [photo, setPhoto] = useState('https://via.placeholder.com/150');
  const handlePhotoChange = (event: FormEvent) => {
    const inputFile = event.target as HTMLInputElement;
    const { files } = inputFile;
    if (files) {
      setPreviewImage(files, setPhoto);
    }
  };
  return (
    <CreatePostContainer>
      <form action="" method="post" className="card flex-center">
        <h2>New Post</h2>
        <InputPhoto onChange={handlePhotoChange} />
        {photo ? (
          <div className="photoPreview">
            <img src={photo} alt="profilePhoto" />
          </div>
        ) : (
          ''
        )}
        <Textarea text="text" maxLength={500} />

        <SubmitInput value="Send" />
      </form>
    </CreatePostContainer>
  );
};

export default CreatePost;
