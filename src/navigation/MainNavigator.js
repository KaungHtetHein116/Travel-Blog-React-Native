import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import TabBarProvider from './contexts/TabBarProvider';

const MainNavigator = () => {
  return (
    <TabBarProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TabBarProvider>
  );
};

export default MainNavigator;
