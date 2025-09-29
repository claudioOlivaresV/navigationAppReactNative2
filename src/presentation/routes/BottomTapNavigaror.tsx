import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {Tab2Screen} from '../screens/tabs/Tab2Screen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import { TopTabNavi } from './TopTabNavi';

const Tab = createBottomTabNavigator();

export const BottomTapNavigaror = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen name="tab1" component={Tab1Screen} />
      <Tab.Screen name="tab2" component={TopTabNavi} />
      <Tab.Screen name="tab3" component={Tab3Screen} />
    </Tab.Navigator>
  );
};
