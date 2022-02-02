import React from 'react';

export const setPreviewImage = (
  files: FileList,
  setPhoto: React.Dispatch<React.SetStateAction<string>>
) => {
  const file = Array.from(files)[0];
  const reader = new FileReader();
  reader.onload = () => {
    setPhoto(String(reader.result));
  };
  reader.readAsDataURL(file);
};
