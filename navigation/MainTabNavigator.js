import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import InfoScreen from '../screens/InfoScreen';
import MapScreen from '../screens/MapScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-map'
          : 'md-map'
      }
    />
  ),
};

MapStack.path = '';


const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};

SearchStack.path = '';

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen,
  },
  config
);

InfoStack.navigationOptions = {
  tabBarLabel: 'Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios'
    ? `ios-information-circle${focused ? '' : '-outline'}`
    : 'md-information-circle'} />
  ),
};

InfoStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  MapStack,
  InfoStack
 
});

tabNavigator.path = '';

export default tabNavigator;
