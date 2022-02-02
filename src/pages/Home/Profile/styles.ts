import styled from 'styled-components';

export const ProfileContainer = styled.main`
  .info {
    flex-direction: column;
    gap: 2rem;
    .header {
      width: 100%;
      justify-content: space-evenly;
    }
    .data {
      width: 100%;
      .item {
        display: flex;
        align-items: center;
        p {
          font-size: 1.8rem;
          color: ${({ theme }) => theme.color.grey};
          flex-basis: 500px;
        }
        span {
          font-size: 1.2rem;

          color: ${({ theme }) => theme.color.secondary};
          font-weight: bold;
          flex-basis: 500px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .info {
      .data {
        .item {
          display: initial;
        }
      }
    }
  }
`;
