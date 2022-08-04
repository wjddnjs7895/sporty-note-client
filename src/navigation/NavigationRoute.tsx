import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import styled from 'styled-components/native';

import { getPixelToNumber, getWidthPixel } from '../utils/responsive';
import MyRoutineScreen from '../screens/MyRoutineScreen';
import SearchScreen from '../screens/SearchScreen';
import NoteListScreen from '../screens/NoteListScreen';
import UserScreen from '../screens/UserScreen';
import MainScreen from '../screens/MainScreen';

import { palette } from '../constants/palette';
import home_icon from '../assets/icons/gnb/home_icon.png';
import home_selected_icon from '../assets/icons/gnb/home_selected_icon.png';
import note_icon from '../assets/icons/gnb/note_icon.png';
import note_selected_icon from '../assets/icons/gnb/note_selected_icon.png';
import record_icon from '../assets/icons/gnb/record_icon.png';
import record_selected_icon from '../assets/icons/gnb/record_selected_icon.png';
import search_icon from '../assets/icons/gnb/search_icon.png';
import search_selected_icon from '../assets/icons/gnb/search_selected_icon.png';
import user_icon from '../assets/icons/gnb/user_icon.png';
import user_selected_icon from '../assets/icons/gnb/user_selected_icon.png';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarStyle: {
          height: getPixelToNumber(70),
          paddingTop: getPixelToNumber(8),
          paddingBottom: getPixelToNumber(8),
        },
      }}
    >
      <BottomTab.Screen
        name="CalendarScreen"
        component={MyRoutineScreen}
        options={{
          title: '마이루틴',
          tabBarIcon: ({ focused }) => <ImageStyled source={focused ? record_selected_icon : record_icon} />,
        }}
      />
      <BottomTab.Screen
        name="NoteListScreen"
        component={NoteListScreen}
        options={{
          title: '노트리스트',
          tabBarIcon: ({ focused }) => <ImageStyled source={focused ? note_selected_icon : note_icon} />,
        }}
      />
      <BottomTab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: '홈',
          headerShown: false,
          tabBarIcon: ({ focused }) => <ImageStyled source={focused ? home_selected_icon : home_icon} />,
        }}
      />
      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({ focused }) => <ImageStyled source={focused ? search_selected_icon : search_icon} />,
        }}
      />
      <BottomTab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({ focused }) => <ImageStyled source={focused ? user_selected_icon : user_icon} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.gray_06,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={AppTheme}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const ImageStyled = styled.Image`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;
