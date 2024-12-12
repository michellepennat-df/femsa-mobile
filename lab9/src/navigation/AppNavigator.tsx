import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import ProfileScreen from '../screens/Home/Profile';
import SettingsScreen from '../screens/Settings/Settings';
import HomeTabsNavigator from './HomeTabsNavigator';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTabsNavigator}
        options={{title: 'Destinos'}}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Perfil'}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Configuración'}}
      />
    </Drawer.Navigator>
  );
}
