import GetStartedScreen from './get-started';
import HomeScreen from './home';
import SettingsScreen from './settings';
import LanguageScreen from './settings/language';

export enum ROUTE {
  /** Home Screen */
  HOME = 'HOME',
  /** Get Started Screen */
  GET_STARTED = 'GET_STARTED',
  /** Settings Screen */
  SETTINGS = 'SETTINGS',
  /** Language selection screen */
  LANGUAGE = 'LANGUAGE',
}

export type RouteParams = {
  [ROUTE.HOME]: undefined;
  [ROUTE.GET_STARTED]: undefined;
  [ROUTE.SETTINGS]: undefined;
  [ROUTE.LANGUAGE]: undefined;
};

type Screen = {
  title: string;
  route: ROUTE;
  component: (props: any) => JSX.Element;
};

export const Home: Screen = {
  title: 'Home',
  route: ROUTE.HOME,
  component: HomeScreen,
};

export const GetStarted: Screen = {
  title: 'Get Started',
  route: ROUTE.GET_STARTED,
  component: GetStartedScreen,
};

export const Settings: Screen = {
  title: 'Settings',
  route: ROUTE.SETTINGS,
  component: SettingsScreen,
};

export const Language: Screen = {
  title: 'Language',
  route: ROUTE.LANGUAGE,
  component: LanguageScreen,
};
