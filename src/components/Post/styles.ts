import styled from 'styled-components';

export const PostContainer = styled.div`
  flex-direction: column;
  gap: 0.8rem;

  .postText {
    font-size: 1rem;
    text-indent: 1rem;
  }
  .actions {
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
  }
`;
