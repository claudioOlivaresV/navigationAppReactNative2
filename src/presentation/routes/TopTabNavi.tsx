import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {AboutScreen} from '../screens/about/AboutScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavi = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {color: 'black'},
        tabBarActiveTintColor: 'black', // 👈 color del tab activo
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{tabBarLabel: 'Perfil'}} // 👈 forzar label
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{tabBarLabel: 'Acerca de'}} // 👈 forzar label
      />
    </Tab.Navigator>
  );
};
