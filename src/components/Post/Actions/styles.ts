import styled from 'styled-components';

export const ActionsContainer = styled.div`
  width: 100%;
  gap: 1rem;
  &.start {
    justify-content: flex-start;
  }
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
