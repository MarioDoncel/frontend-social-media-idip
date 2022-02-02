import styled from 'styled-components';

export const CommentCardContainer = styled.div`
  display: flex;
  flex-basis: 150px;
  gap: 5%;
  background-color: ${({ theme }) => theme.color.black};
  padding: 10px;
  border-radius: 10px;
  > div {
    flex-basis: 15%;
  }
  p {
    flex-basis: 80%;
    font-size: 1rem;
  }
`;
