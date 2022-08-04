import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import CalendarScreen from '../screens/CalendarScreen';
import SearchScreen from '../screens/SearchScreen';
import NoteListScreen from '../screens/NoteListScreen';
import UserScreen from '../screens/UserScreen';
import MainScreen from '../screens/MainScreen';

import { palette } from '../constants/palette';

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="CalendarScreen">
      <BottomTab.Screen name="CalendarScreen" component={CalendarScreen} options={{ title: 'Calendar' }} />
      <BottomTab.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'Search' }} />
      <BottomTab.Screen name="MainScreen" component={MainScreen} options={{ title: 'Main', headerShown: false }} />
      <BottomTab.Screen name="NoteListScreen" component={NoteListScreen} options={{ title: 'NoteList' }} />
      <BottomTab.Screen name="UserScreen" component={UserScreen} options={{ title: 'User' }} />
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
