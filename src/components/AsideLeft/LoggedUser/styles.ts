import styled from 'styled-components';

export const LoggedUserContainer = styled.div`
  gap: 8px;
  line-height: 1.4rem;
  span {
    color: ${({ theme }) => theme.color.grey};
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    div:first-child {
      display: none;
    }
    img {
      display: none;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
