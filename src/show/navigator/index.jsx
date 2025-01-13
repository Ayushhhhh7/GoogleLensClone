import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { sizes } from 'Theme';
import { CustomIcon } from 'Components';

import Login from '../screens/public/Login';
import HomePage from '../screens/session/Homepage';
import History from '../screens/session/History/History';
import Notifications from '../screens/session/Notifications';
import More from '../screens/session/More';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2e3133',
          borderTopWidth: 0,
          height: 60,
          paddingTop: sizes.padding
        },
        tabBarShowLabel: false
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon 
              icon="home" 
              size={sizes.icon.md.size} 
              iconColor={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon 
              icon="history" 
              size={sizes.icon.md.size} 
              iconColor={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon 
              icon="notifications" 
              size={sizes.icon.md.size} 
              iconColor={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon 
              icon="more" 
              size={sizes.icon.md.size} 
              iconColor={color} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainApp" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Navigator;