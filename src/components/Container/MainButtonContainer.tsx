import React from 'react';
import styled from 'styled-components/native';

import SubHeadText from '../Text/SubHeadText';
import BodyText from '../Text/BodyText';
import Blank from '../Blank';
import MainButton from '../Button/MainButton';
import MainLongButton from '../Button/MainLongButton';
import SearchBarButton from '../Button/SearchBarButton';
import { getWidthPixel } from '../../utils/responsive';
import { getPixelToPixel } from '../../utils/responsive';

import { MAIN_BUTTON_HEIGHT } from '../../constants';
import note_list_icon from '../../assets/icons/illust/note_list.png';
import favorite_icon from '../../assets/icons/illust/favorite.png';
import widget_icon from '../../assets/icons/illust/widget.png';
import my_routine_icon from '../../assets/icons/illust/my_routine.png';

function MainButtonContainer() {
  return (
    <ContainerStyled>
      <SearchBarButton>운동 방법을 검색해보세요.</SearchBarButton>
      <Blank height="25px" />
      <InnerContainerStyled>
        <MainButton width={getWidthPixel(211)} height={MAIN_BUTTON_HEIGHT} buttonColor="white">
          <SubHeadText fontNumber={2}>노트 리스트</SubHeadText>
          <BodyText fontNumber={5} fontColor={'gray_04'}>
            나의 운동 노트를 확인하세요
          </BodyText>
          <ImageStyled source={note_list_icon} />
        </MainButton>
        <MainButton width={getWidthPixel(136)} height={MAIN_BUTTON_HEIGHT} buttonColor="white">
          <SubHeadText fontNumber={2}>즐겨찾기</SubHeadText>
          <ImageStyled source={favorite_icon} />
        </MainButton>
      </InnerContainerStyled>
      <InnerContainerStyled>
        <MainButton width={getWidthPixel(136)} height={MAIN_BUTTON_HEIGHT} buttonColor="white">
          <SubHeadText fontNumber={2}>위젯</SubHeadText>
          <ImageStyled source={widget_icon} />
        </MainButton>
        <MainButton width={getWidthPixel(211)} height={MAIN_BUTTON_HEIGHT} buttonColor="white">
          <SubHeadText fontNumber={2}>마이 루틴</SubHeadText>
          <BodyText fontNumber={5} fontColor={'gray_04'}>
            내 운동 루틴을 확인하고 싶다면?
          </BodyText>
          <ImageStyled source={my_routine_icon} />
        </MainButton>
      </InnerContainerStyled>
      <MainLongButton>
        <SubHeadText fontNumber={2}>마이 플레이스</SubHeadText>
        <BodyText fontNumber={5} fontColor={'white'}>
          내 근처 운동 기구를 찾아보세요!
        </BodyText>
      </MainLongButton>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  align-items: center;
  width: 100%;
  margin-top: ${getPixelToPixel(25)};
`;

const InnerContainerStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 91%;
  margin-bottom: 10px;
`;

const ImageStyled = styled.Image`
  position: absolute;
  width: ${getPixelToPixel(40)};
  height: ${getPixelToPixel(40)};
  right: 0px;
  bottom: 0px;
`;

export default MainButtonContainer;
