import GetStartedScreen from './get-started';
import HomeScreen from './home';
import SettingsScreen from './settings';

type Screen = {
  name: string;
  routeName: string;
  component: () => JSX.Element;
};

export const Home: Screen = {
  name: 'Home',
  routeName: 'HOME',
  component: HomeScreen,
};

export const GetStarted: Screen = {
  name: 'Get Started',
  routeName: 'GET_STARTED',
  component: GetStartedScreen,
};

export const Settings: Screen = {
  name: 'Settings',
  routeName: 'SETTINGS',
  component: SettingsScreen,
};
