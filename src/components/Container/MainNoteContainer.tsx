import React from 'react';
import styled from 'styled-components/native';

import NoteListButton from '../Button/NoteListButton';
import MainCardListContainer from './MainCardListContainer';
import Blank from '../Blank';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';
import DotIndex from '../Index/DotIndex';

function MainNoteContainer() {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <NoteListButton isSelected={true}>운동정도</NoteListButton>
        <NoteListButton>내 근처 운동</NoteListButton>
      </HeaderStyled>
      <Blank height={'25px'} />
      <MainCardListContainer height={getWidthPixel(150)} />
      <DotIndex />
    </ContainerStyled>
  );
}

const HeaderStyled = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${getHeightPixel(30)};
`;

const ContainerStyled = styled.View`
  align-items: center;
`;

export default MainNoteContainer;
