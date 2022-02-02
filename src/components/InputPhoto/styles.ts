import styled from 'styled-components';

export const InputPhotoContainer = styled.div`
  position: relative;
  input {
    position: absolute;
    width: 100px;
    height: 30px;
    opacity: 0;
    top: 8px;
    z-index: 1;
    ::-webkit-file-upload-button {
      cursor: pointer;
    }
  }
`;
