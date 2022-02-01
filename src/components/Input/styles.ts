import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  color: ${({ theme }) => theme.color.grey};

  input {
    background-color: ${({ theme }) => theme.color.dark};
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
`;
