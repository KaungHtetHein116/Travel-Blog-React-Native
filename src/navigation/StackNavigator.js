import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ArticleList from '../screens/ArticleList';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="ArticleList"
        component={ArticleList}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
export const PostStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};
export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
