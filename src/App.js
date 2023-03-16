/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import GeneralProvider from './providers/GeneralProvider';
import NavigationProvider from './providers/NavigationProvider';

const App: () => Node = () => {
  return (
    <GeneralProvider>
      <NavigationProvider />
    </GeneralProvider>
  );
};

export default App;
