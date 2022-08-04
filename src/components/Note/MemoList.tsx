import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixelByWidth, getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import Memo from './Memo';

function MemoList() {
  return (
    <ContainerStyled>
      <Memo memoTitle="가슴" tagColor="tag_01" />
      <DividerStyled />
      <Memo memoTitle="팔꿈치" tagColor="tag_02" />
      <DividerStyled />
      <Memo memoTitle="다리" tagColor="tag_03" />
      <DividerStyled />
      <Memo memoTitle="그립" tagColor="tag_04" />
    </ContainerStyled>
  );
}

const DividerStyled = styled.View`
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
  margin-top: ${getHeightPixel(15)};
  margin-bottom: ${getHeightPixel(15)};
  width: ${getWidthPixel(322)};
`;

const ContainerStyled = styled.View`
  width: ${getWidthPixel(358)};
  padding-left: ${getWidthPixel(27)};
  padding-right: ${getWidthPixel(27)};
  padding-top: ${getHeightPixelByWidth(27, 15)};
  padding-bottom: ${getHeightPixelByWidth(27, 15)};
  margin-top: ${getHeightPixel(25)};
  background-color: white;
  border-radius: ${getPixelToPixel(10)};
`;

export default MemoList;
