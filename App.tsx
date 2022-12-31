import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';

import MainNavigationStack from './src/navigator';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigationStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
