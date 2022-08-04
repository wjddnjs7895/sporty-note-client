import React from 'react';
import styled, { css } from 'styled-components/native';

import SubHeadText from '../Text/SubHeadText';
import { palette } from '../../constants/palette';
import { ButtonProps, ButtonStyle } from '../../constants/types';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

const NoteListButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <NoteListButtonStyled {...rest}>
      <SubHeadText fontColor={rest.isSelected ? 'black' : 'white'}>{children}</SubHeadText>
    </NoteListButtonStyled>
  );
};

const NoteListButtonStyled = styled.View<ButtonStyle>`
  align-items: center;
  width: ${getWidthPixel(179)};
  ${({ isSelected = false }) => css`
    border-bottom-width: ${isSelected ? getHeightPixel(3) : getHeightPixel(1)};
    border-bottom-color: ${isSelected ? palette.black : palette.white};
  `}
`;

export default NoteListButton;
