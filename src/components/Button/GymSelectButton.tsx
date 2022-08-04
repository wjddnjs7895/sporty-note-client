import React from 'react';
import styled from 'styled-components/native';

import TitleText from '../Text/TitleText';
import { ButtonStyle, ButtonProps } from '../../constants/types';

import show_all_icon from '../../assets/icons/button/show_all.png';

const GymSelectButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <GymSelectButtonStyled {...rest}>
      <TitleText>{children}</TitleText>
      <ImageStyled source={show_all_icon} />
    </GymSelectButtonStyled>
  );
};

const GymSelectButtonStyled = styled.TouchableOpacity<ButtonStyle>`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageStyled = styled.Image`
  width: 30px;
  height: 30px;
`;

export default GymSelectButton;
