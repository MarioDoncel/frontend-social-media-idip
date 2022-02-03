import styled from 'styled-components';

export const NavbarContainer = styled.div`
  &.paddingZero {
    padding: 0;
    overflow: hidden;
  }
  a {
    justify-content: flex-start;
    gap: 1rem;
    color: #fff;
    transition: 400ms;
    font-size: 1rem;
    padding: 0.5rem 0;
    svg {
      margin-left: 8px;
    }
    &.onPage {
      color: ${({ theme }) => theme.color.danger};
      background-color: ${({ theme }) => theme.color.black};
      position: relative;
      ::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 100%;
        background-color: ${({ theme }) => theme.color.danger};
      }
    }
  }
`;
