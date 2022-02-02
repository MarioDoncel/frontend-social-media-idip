import styled from 'styled-components';

export const AsideLeftContainer = styled.aside`
  height: 100%;
  width: 25vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    font-weight: bolder;
    transition: 400ms;
    :hover {
      letter-spacing: 3px;
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.light};
    }
  }
`;
