import React from 'react';
import styled, { css } from 'styled-components/native';

import { ButtonStyle, ButtonProps } from '../../styles/Theme';
import { palette } from '../../styles/palette';

const MainButton = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.TouchableOpacity<ButtonStyle>`
  flex: 1;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  ${({
    width = '100px',
    height = '100px',
    buttonColor = 'white',
    hasBorder = false,
    borderColor = 'white',
    borderRadius = '4px',
    fontColor = 'black',
    fontSize = '14px',
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${palette[buttonColor]};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : 'none'};
    border-radius: ${borderRadius};
    color: ${palette[fontColor]};
    font-size: ${fontSize};
  `}
`;

export default MainButton;
