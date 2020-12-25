import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './StackNavigator';
import {PostStackNavigator} from './StackNavigator';
import {ProfileStackNavigator} from './StackNavigator';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        initialParams={{icon: 'home'}}
      />
      <Tab.Screen
        name="Post"
        component={PostStackNavigator}
        initialParams={{icon: 'plus-circle'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        initialParams={{icon: 'bars'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
