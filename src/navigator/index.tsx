import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'native-base';
import React from 'react';
import { GetStarted, Home, RouteParams, Settings } from '../screens';

const Stack = createNativeStackNavigator<RouteParams>();

const MainNavigationStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={Settings.route}
      screenOptions={{
        statusBarColor: theme.colors.primary[500],
        headerTintColor: theme.colors.text[50],
        headerStyle: { backgroundColor: theme.colors.primary[500] },
      }}>
      <Stack.Screen
        name={GetStarted.route}
        component={GetStarted.component}
        options={{ title: GetStarted.title }}
      />

      <Stack.Screen
        name={Home.route}
        component={Home.component}
        options={{ title: Home.title }}
      />

      <Stack.Screen
        name={Settings.route}
        component={Settings.component}
        options={{ title: Settings.title }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigationStack;
