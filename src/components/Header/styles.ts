import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.dark};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5%;
  gap: 1rem;
  max-width: 100%;
  top: 0;
  height: 80px;

  h5 {
    max-width: 25vw;
    text-align: center;
    animation: pulsate 1s infinite;
    cursor: pointer;
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
  button {
    :hover {
      animation: 400ms ease vibrate;
    }
  }
  img {
    cursor: pointer;
  }

  @media (max-width: 350px) {
    .userImage {
      display: none;
    }
  }

  @keyframes pulsate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.04);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes vibrate {
    0% {
      transform: rotate(8deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    40% {
      transform: rotate(8deg);
    }
    60% {
      transform: rotate(-8deg);
    }
    80% {
      transform: rotate(8deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
