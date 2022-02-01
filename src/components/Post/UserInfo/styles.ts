import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  width: 100%;
  justify-content: flex-start;
  gap: 1rem;
  .info {
    line-height: 1.4rem;
    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.color.grey};
    }
  }
`;
