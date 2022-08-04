import React from 'react';
import styled, { css } from 'styled-components/native';

import { getHeightPixelByWidth, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';
import { MemoProps, MemoStyle } from '../../constants/types';

import { palette } from '../../constants/palette';
import show_all_icon from '../../assets/icons/button/show_all.png';

function Memo({ memoTitle, tagColor }: MemoProps) {
  return (
    <ContainerStyled>
      <TagStyled tagColor={tagColor} />
      <TextStyled fontNumber={3}>{memoTitle}</TextStyled>
      <ImageStyled source={show_all_icon} />
    </ContainerStyled>
  );
}

const TextStyled = styled(SubHeadText)`
  position: absolute;
  left: ${getWidthPixel(30)};
`;

const ContainerStyled = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${getHeightPixelByWidth(303, 23)};
  margin-top
`;

const TagStyled = styled.View<MemoStyle>`
  position: absolute;
  left: 0;
  width: ${getPixelToPixel(10)};
  height: ${getPixelToPixel(10)};
  border-radius: ${getPixelToPixel(10)};
  ${({ tagColor = 'tag_01' }) => css`
    background-color: ${palette[tagColor]};
  `}
`;

const ImageStyled = styled.Image`
  position: absolute;
  width: ${getPixelToPixel(23)};
  height: ${getPixelToPixel(23)};
  right: 0;
`;

export default Memo;
