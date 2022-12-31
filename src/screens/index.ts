import GetStartedScreen from './get-started';
import HomeScreen from './home';
import SettingsScreen from './settings';

export enum ROUTE {
  HOME = 'HOME',
  GET_STARTED = 'GET_STARTED',
  SETTINGS = 'SETTINGS',
}

export type RouteParams = {
  [ROUTE.HOME]: undefined;
  [ROUTE.GET_STARTED]: undefined;
  [ROUTE.SETTINGS]: undefined;
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
