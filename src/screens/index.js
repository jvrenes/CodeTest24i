// Libaries
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from 'react-native'

// Screens
import DashboardScreen from './DashboardScreen'
import DetailsScreen from './DetailsScreen'
import VideoScreen from './VideoScreen'

// Theme
import { COLORS } from '../theme';

// Instantiate navigator
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'CodeTest24i',
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />
      <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator