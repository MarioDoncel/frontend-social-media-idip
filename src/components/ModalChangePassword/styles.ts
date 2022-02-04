import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IModalChangePasswordProps extends HTMLAttributes<HTMLDivElement> {
  modalIsOpen: boolean;
}

export const ModalChangePasswordContainer = styled.div<IModalChangePasswordProps>`
  display: ${({ modalIsOpen }) => (modalIsOpen ? 'inherit' : 'none')};
  visibility: ${({ modalIsOpen }) => (modalIsOpen ? 'visible' : 'hidden')};
  position: absolute;
  background-color: rgba(355, 355, 355, 0.8);
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  h1 {
    color: yellow;
  }
  .card {
    width: 70%;
    height: 70%;
    gap: 2rem;
    flex-direction: column;
    h3 {
      text-align: center;
  }
  form{
    flex-direction:column;
    gap: 2rem;
    label{
      text-align:center
    }
  }
  
`;
