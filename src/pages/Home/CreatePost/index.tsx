import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import InputPhoto from '../../../components/InputPhoto';
import SubmitInput from '../../../components/SubmitInput';
import Textarea from '../../../components/Textarea';
import { setPreviewImage } from '../../../utils/setPreviewImage';

import { CreatePostContainer } from './styles';
import { createPost } from './utils/createPost';

const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState('https://via.placeholder.com/150');
  const handlePhotoChange = (event: FormEvent) => {
    const inputFile = event.target as HTMLInputElement;
    const { files } = inputFile;
    if (files) {
      setPreviewImage(files, setPhoto);
    }
  };
  const handlePostSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    await createPost(form, navigate);
  };
  return (
    <CreatePostContainer>
      <form
        action=""
        method="post"
        className="card flex-center"
        onSubmit={handlePostSubmit}
      >
        <h2>New Post</h2>
        <InputPhoto onChange={handlePhotoChange} />
        {photo ? (
          <div className="photoPreview">
            <img src={photo} alt="profilePhoto" />
          </div>
        ) : (
          ''
        )}
        <Textarea text="Text" maxLength={500} />

        <SubmitInput value="Send" />
      </form>
    </CreatePostContainer>
  );
};

export default CreatePost;
