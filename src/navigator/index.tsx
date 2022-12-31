import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GetStarted, Home, Settings } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName={Settings.routeName}>
      <Stack.Screen
        name={GetStarted.routeName}
        component={GetStarted.component}
        options={{ title: GetStarted.name }}
      />

      <Stack.Screen name={Home.routeName} component={Home.component} />

      <Stack.Screen
        name={Settings.routeName}
        component={Settings.component}
        options={{ title: Settings.name }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigationStack;
