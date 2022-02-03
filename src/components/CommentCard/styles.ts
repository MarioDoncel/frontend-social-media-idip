import styled from 'styled-components';

export const CommentCardContainer = styled.div`
  display: flex;
  gap: 5%;
  background-color: ${({ theme }) => theme.color.black};
  padding: 10px;
  border-radius: 10px;
  width: 100%;

  > div {
    width: clamp(50px, 20%, 40vw);
    height: 100%;
  }
  p {
    flex-basis: 80%;
    font-size: 1rem;
  }
`;
