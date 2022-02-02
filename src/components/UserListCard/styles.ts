import styled from 'styled-components';

export const UserListCardContainer = styled.div`
  &.flex-center {
    justify-content: space-between;
  }
  .user {
    gap: 1rem;
    line-height: 1.4rem;
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
`;
