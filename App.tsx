import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import MainNavigationStack from './src/navigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigationStack />
    </NavigationContainer>
  );
};

export default App;
