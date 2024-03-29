import styled from 'styled-components';

export const SigninContainer = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  min-width: 100vw;
  min-height: 100vh;
  .container {
    width: 90%;
    margin: 0 auto;
    gap: 2rem;
    .logo {
      flex-direction: column;
      svg {
        font-size: 3rem;
      }
      h1 {
        text-align: center;
        :nth-child(2) {
          color: ${({ theme }) => theme.color.primary};
        }
        :last-child {
          color: ${({ theme }) => theme.color.secondary};
        }
      }
      hr {
        height: 2px;
        color: #fff;
        width: 100%;
        background-color: ${({ theme }) => theme.color.grey};
      }
      p {
        font-size: 1rem;
        text-align: center;
      }
    }
    form {
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      p {
        font-size: 1rem;
        span {
          cursor: pointer;
          color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
  @media (max-width: 500px) {
    .container {
      flex-direction: column;
    }
  }
`;
