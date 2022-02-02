import styled from 'styled-components';

export const LogoDescriptionContainer = styled.div`
  flex-direction: column;
  svg {
    font-size: 3rem;
  }
  h1 {
    text-align: center;
    :nth-child(2) {
      color: ${({ theme }) => theme.color.primary};
    }
    :last-child {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
  hr {
    height: 2px;
    color: #fff;
    width: 100%;
    background-color: ${({ theme }) => theme.color.grey};
  }
  p {
    font-size: 1rem;
    text-align: center;
  }
`;
