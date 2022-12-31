import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import SCREENS from './screens';

const Stack = createNativeStackNavigator();

const MainNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigationStack;
