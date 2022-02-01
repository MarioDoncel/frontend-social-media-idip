import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.dark};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5%;
  gap: 6px;
  max-width: 100%;
  top: 0;
  height: 80px;
  /* &.fixed {
    width: 100vw;
    position: fixed;
    animation: falldown 400ms linear;
  } */
  h5 {
    max-width: 25vw;
    text-align: center;
  }
  .searchInput {
    background-color: ${({ theme }) => theme.color.black};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-radius: 100px;
    gap: 1rem;
    flex: 1;
    input {
      background-color: transparent;
      width: 100%;
      color: #fff;
    }
  }
  /* @keyframes falldown {
    from {
      opacity: 0;
      top: -50px;
    }
    to {
      opacity: 1;
      top: 0;
    } */
  }
`;
