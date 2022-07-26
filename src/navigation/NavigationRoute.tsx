import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CalendarScreen from '../screens/CalendarScreen';
import SearchScreen from '../screens/SearchScreen';
import BubbleScreen from '../screens/BubbleScreen';
import NoteListScreen from '../screens/NoteListScreen';
import UserScreen from '../screens/UserScreen';

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="CalendarScreen">
      <BottomTab.Screen name="CalendarScreen" component={CalendarScreen} options={{ title: 'Calendar' }} />
      <BottomTab.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'Search' }} />
      <BottomTab.Screen name="BubbleScreen" component={BubbleScreen} options={{ title: 'Bubble' }} />
      <BottomTab.Screen name="NoteListScreen" component={NoteListScreen} options={{ title: 'NoteList' }} />
      <BottomTab.Screen name="UserScreen" component={UserScreen} options={{ title: 'User' }} />
    </BottomTab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
