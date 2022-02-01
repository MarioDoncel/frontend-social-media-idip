import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  .container {
    width: 90%;
    flex: 1;
    margin: auto;
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
    aside {
      height: 100%;
      width: 25vw;
      .profile {
        gap: 8px;
        line-height: 1.4rem;
        span {
          color: ${({ theme }) => theme.color.grey};
          font-size: 1rem;
        }
      }
    }
    main {
      flex: 1;
    }
  }
`;
