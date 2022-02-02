import styled from 'styled-components';

export const TextareaContainer = styled.text`
  width: 100%;
  textarea {
    background-color: ${({ theme }) => theme.color.black};
    width: 100%;
    height: 150px;
    resize: none;
    color: #fff;
    padding: 12px 16px;
    border-radius: 10px;
    :focus,
    :focus-within {
      border: 1px solid ${({ theme }) => theme.color.primary};
    }
  }
`;
