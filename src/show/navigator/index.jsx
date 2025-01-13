import React from 'react';
import {View, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {sizes} from 'Theme';
import {CustomIcon} from 'Components';

import Login from '../screens/public/Login';
import HomePage from '../screens/session/Homepage';
import History from '../screens/session/History/History';
import Notifications from '../screens/session/Notifications';
import More from '../screens/session/More';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabScreens = [
  {
    name: 'HomePage',
    component: HomePage,
    icon: 'home',
  },
  {
    name: 'History',
    component: History,
    icon: 'history',
  },
  {
    name: 'Notification',
    component: Notifications,
    icon: 'notifications',
  },
  {
    name: 'More',
    component: More,
    icon: 'more',
  },
];

const activeIconStyle = {
  backgroundColor: '#5a6c8a',
  borderRadius: 40,
  height: 36,
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: sizes.padding * 1.5,
  paddingTop: sizes.padding/2
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2e3133',
          borderTopWidth: 0,
          height: 70,
          paddingTop: sizes.padding * 4,
        },
        tabBarShowLabel: false,
        tabBarButton: props => (
          <Pressable {...props} android_ripple={false} style={props.style} />
        ),
      }}>
      {tabScreens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <View style={activeIconStyle}>
                  <CustomIcon
                    icon={screen.icon}
                    size={sizes.icon.lg.size}
                    iconColor={'#8ab4f8'}
                  />
                </View>
              ) : (
                <View style={{paddingLeft: sizes.padding}}>
                  <CustomIcon
                    icon={screen.icon}
                    size={sizes.icon.md.size}
                    iconColor={color}
                  />
                </View>
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainApp" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Navigator;
