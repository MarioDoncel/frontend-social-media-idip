import styled from 'styled-components';

export const PostImageContainer = styled.div`
  width: 100%;
  max-height: 170px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    object-fit: contain;
  }
  @media (min-width: 700px) {
    max-height: 400px;
  } ;
`;
