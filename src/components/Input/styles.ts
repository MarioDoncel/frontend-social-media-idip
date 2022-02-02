/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { IInputProps } from '.';

export const InputContainer = styled.div<IInputProps>`
  display: flex;
  flex-direction: column;
  width: 50vw;
  color: ${({ theme }) => theme.color.grey};

  input {
    background-color: ${({ theme }) => theme.color.dark};
    background-color: ${(props) => props.secondaryBg ? props.theme.color.black :
    ''};
    color: #fff;
    padding: 6px 8px;
    border-radius: 10px;
    :focus,
    :focus-within {
      border: 1px solid ${({ theme }) => theme.color.primary};
    }
  }
  input[type='date'] {
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }

  @media (max-width: 500px) {
    width: 80%;
    input{
      font-size: 1rem;
    }
  }
`;
