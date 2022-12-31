import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';

import MainNavigationStack from './src/navigator';
import store from './src/store';
import theme from './src/theme';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <MainNavigationStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
