import styled from 'styled-components';

export const CreatePostContainer = styled.main`
  form {
    flex-direction: column;
    gap: 1rem;
    .photoPreview {
      width: 100%;
      height: 170px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }
    .textarea {
      width: 100%;
    }
    textarea {
      background-color: ${({ theme }) => theme.color.black};
      width: 100%;
      height: 150px;
      resize: none;
      color: #fff;
      padding: 12px 16px;
      border-radius: 10px;
      :focus,
      :focus-within {
        border: 1px solid ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
