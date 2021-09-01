import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SCREEN_JOBL_DETAIL,
  SCREEN_JOBL_LIST,
  SCREEN_LOGIN,
} from '../fixture/screenName';
import JobListScreen from '../screens/JobListScreen';
import JobDetail from '../screens/JobDetail';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREEN_LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={SCREEN_JOBL_LIST}
          component={JobListScreen}
          initialParams={{ description: '' }}
        />
        <Stack.Screen name={SCREEN_JOBL_DETAIL} component={JobDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
