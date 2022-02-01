import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 6px 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ color }) => color};
  cursor: pointer;
`;
