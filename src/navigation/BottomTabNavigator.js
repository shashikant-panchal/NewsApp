import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Discover') {
              iconName = 'compass-outline';
            } else if (route.name === 'Saved') {
              iconName = 'bookmark-outline';
            } else if (route.name === 'Profile') {
              iconName = 'account-outline';
            } else if (route.name === 'AddPost') {
              iconName = 'plus-circle-outline';
            }

            return (
              <Icon
                name={iconName}
                size={40}
                color={focused ? 'white' : color}
              />
            );
          },
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: false,
          tabBarItemStyle: styles.tabBarItem,
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="AddPost" component={AddPostScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 35,
    height: 80,
    backgroundColor: 'black',
    ...shadow,
  },
  tabBarItem: {
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});

const shadow = {
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 10},
  shadowOpacity: 0.5,
  shadowRadius: 15,
  elevation: 5,
};

export default BottomTabNavigator;
