import styled from 'styled-components';

export const LoggedUserContainer = styled.div`
  gap: 8px;
  line-height: 1.4rem;
  span {
    color: ${({ theme }) => theme.color.grey};
    font-size: 1rem;
  }
`;
