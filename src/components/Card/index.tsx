/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components/native';

import { CardProps, CardStyle, ImageStyle } from '../../constants/types';
import { getWidthPixel, getHeightPixelByWidth, getPixelToPixel, getHeightPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import SubHeadText from '../Text/SubHeadText';

import { WORKOUT__TO__ASSETS } from '../../constants/workout';
import { Text } from 'react-native';

function Card({ children, ...rest }: CardProps) {
  return (
    <CardStyled {...rest}>
      <ImageStyled source={WORKOUT__TO__ASSETS[rest.workoutName]} />
      <SubHeadText fontNumber={4}>{rest.workoutName}</SubHeadText>
    </CardStyled>
  );
}

const CardStyled = styled.View<CardStyle>`
  align-items: center;
  justify-content: center;
  margin-left: ${getWidthPixel(5)};
  margin-right: ${getWidthPixel(5)};
  border-radius: ${getPixelToPixel(10)};
  ${({
    width = getWidthPixel(150),
    height = getHeightPixelByWidth(150, 150),
    isSelected = false,
    backgroundColor = 'gray_07',
    selectedColor = 'lime_01',
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${isSelected ? palette[selectedColor] : palette[backgroundColor]};
  `}
`;

const ImageStyled = styled.Image<ImageStyle>`
  resize-mode: contain;
  margin-bottom: ${getHeightPixel(17)};
  ${({ width = getWidthPixel(90) }) => css`
    width: ${width};
    height: ${width};
  `}
`;

export default Card;
