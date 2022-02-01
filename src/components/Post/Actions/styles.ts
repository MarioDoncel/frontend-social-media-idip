import styled from 'styled-components';

export const ActionsContainer = styled.div`
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
  div {
    display: flex;
    svg {
      cursor: pointer;
    }
    span {
      font-size: 0.6rem;
    }
  }
`;
