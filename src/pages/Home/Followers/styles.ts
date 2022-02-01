import styled from 'styled-components';

export const FollowersContainer = styled.main`
  .follower {
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
