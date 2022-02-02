import styled from 'styled-components';

export const SettingsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: auto;

  form {
    flex-direction: column;
    gap: 0.5rem;
    .photoPreview {
      width: 60px;
      height: 60px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        object-fit: cover;
      }
    }

    input[type='submit'] {
      font-weight: bolder;
      margin-top: 0.5rem;
      padding: 12px 36px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.light};
      cursor: pointer;
      transition: 400ms;
      :hover {
        letter-spacing: 3px;
        background-color: ${({ theme }) => theme.color.light};
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
  .highRiskOptions {
    display: flex;
    justify-content: space-evenly;
    button {
      transition: 400ms;
      :hover {
        transform: scale(1.1);
        color: ${({ theme }) => theme.color.light};
        background-color: ${({ theme }) => theme.color.danger};
      }
    }
  }
`;
