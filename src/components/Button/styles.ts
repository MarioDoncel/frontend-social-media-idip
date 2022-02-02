import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { IButtonProps } from '.';

export const ButtonContainer = styled.button<IButtonProps>`
  padding: 6px 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.black};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  cursor: pointer;
`;
