import styled from 'styled-components';

export const FollowingsContainer = styled.main`
  .card {
    justify-content: space-between;
    .user {
      gap: 1rem;
      line-height: 1.4rem;
      span {
        color: ${({ theme }) => theme.color.grey};
        font-size: 1rem;
      }
    }
  }
`;
