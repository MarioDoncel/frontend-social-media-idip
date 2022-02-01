import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  width: 100%;

  gap: 1rem;
  &.start {
    justify-content: flex-start;
  }
  .info {
    line-height: 1.4rem;
    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.color.grey};
    }
  }
`;
