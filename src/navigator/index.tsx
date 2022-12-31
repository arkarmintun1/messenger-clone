import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'native-base';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { GetStarted, Home, Language, RouteParams, Settings } from '../screens';
import { appSelectors } from '../store/app/app.selector';

const Stack = createNativeStackNavigator<RouteParams>();

const MainNavigationStack = () => {
  const theme = useTheme();
  const language = useSelector(appSelectors.language);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <Stack.Navigator
      initialRouteName={GetStarted.route}
      screenOptions={{
        statusBarColor: theme.colors.primary[500],
        headerTintColor: theme.colors.text[50],
        headerStyle: { backgroundColor: theme.colors.primary[500] },
      }}>
      <Stack.Screen
        name={GetStarted.route}
        component={GetStarted.component}
        options={{ title: GetStarted.title, headerShown: false }}
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

      <Stack.Screen
        name={Language.route}
        component={Language.component}
        options={{ title: Language.title }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigationStack;
