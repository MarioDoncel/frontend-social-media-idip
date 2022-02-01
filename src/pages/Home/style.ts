import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  .container {
    width: 90%;
    flex: 1;
    margin: auto;
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
    main {
      flex: 1;
    }
  }
`;
