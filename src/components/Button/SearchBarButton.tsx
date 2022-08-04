import React from 'react';
import styled from 'styled-components/native';

import { ButtonProps } from '../../constants/types';

import search_icon from '../../assets/icons/icon/search.png';
import record_icon from '../../assets/icons/button/record.png';

import { getPixelToPixel, getWidthPixel, getHeightPixelByWidth } from '../../utils/responsive';

const SearchBarButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <SearchBarStyled {...rest}>
      <ImageStyled source={search_icon} />
      <TextStyled>{children}</TextStyled>
      <RecordImageStyled source={record_icon} />
    </SearchBarStyled>
  );
};

const TextStyled = styled.Text`
  color: '#6C7072';
  font-size: ${getPixelToPixel(17)};
  font-family: Pretendard-Regular;
`;

const ImageStyled = styled.Image`
  width: ${getPixelToPixel(18)};
  height: ${getPixelToPixel(18)};
  margin-left: ${getPixelToPixel(10)};
  margin-right: ${getPixelToPixel(10)};
`;

const RecordImageStyled = styled.Image`
  position: absolute;
  right: ${getPixelToPixel(8)};
  width: ${getPixelToPixel(18)};
  height: ${getPixelToPixel(18)};
`;

const SearchBarStyled = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #f2f3f8;
  width: ${getWidthPixel(358)};
  height: ${getHeightPixelByWidth(358, 39)};
  border-radius: ${getPixelToPixel(8)};
`;

export default SearchBarButton;
