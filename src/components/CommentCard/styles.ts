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
  .info {
    flex-direction: column;
    .userName {
      display: block;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
    }
  }
  .text {
    width: 100%;
    .date {
      font-size: 9px;
      color: ${({ theme }) => theme.color.grey};
    }
  }
`;
