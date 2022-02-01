import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.color.black};
  .container {
    max-height: calc(100vh - 80px);
    width: 90%;
    flex: 1;
    margin: auto;
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 100vh;
    overflow-y: scroll;
    scrollbar-width: none;
    padding-bottom: 1rem;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
