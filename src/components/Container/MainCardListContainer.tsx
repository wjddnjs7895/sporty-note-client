import React from 'react';
import { ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ContainerProps, ContainerStyle } from '../../constants/types';

import Card from '../Card';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

function MainCardListContainer({ ...rest }: ContainerProps) {
  return (
    <ContainerStyled height={rest.height}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card workoutName="벤치프레스" isSelected={false} />
        <Card workoutName="벤치프레스" isSelected={true} />
        <Card workoutName="벤치프레스" isSelected={false} />
        <Card workoutName="벤치프레스" isSelected={false} />
      </ScrollView>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View<ContainerStyle>`
  margin-bottom: ${getHeightPixel(18)};
  ${({ height = getWidthPixel(150) }) => css`
    height: ${height};
  `}
`;

export default MainCardListContainer;
