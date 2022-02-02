import styled from 'styled-components';

export const UserListCardContainer = styled.div`
  :focus,
  :focus-within {
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
  &.flex-center {
    justify-content: space-between;
  }
  .user {
    gap: 1rem;
    line-height: 1.4rem;
    cursor: pointer;
    span {
      color: ${({ theme }) => theme.color.grey};
      font-size: 1rem;
    }
  }
  button {
    transition: 400ms;
    :hover {
      background-color: ${({ theme }) => theme.color.dark};
      font-weight: bolder;
      text-decoration: underline;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
    .user {
      flex-direction: column;
      gap: 1rem;
      .text {
        text-align: center;
      }
    }
  }
`;
