import * as React from 'react';
import styled from 'styled-components';

import { LIGHT_GREEN, WHITE } from 'styles/_colors';



interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return (<Button.Wrapper>{ children }</Button.Wrapper>)
}

Button.Wrapper = styled.button`
  background-color: ${LIGHT_GREEN};
  color: ${WHITE};
  font-size: 10px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  border: 1px solid ${LIGHT_GREEN};
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: ${WHITE};
    color: ${LIGHT_GREEN};
    border: 1px solid ${LIGHT_GREEN};
  }
`;

export default Button;
