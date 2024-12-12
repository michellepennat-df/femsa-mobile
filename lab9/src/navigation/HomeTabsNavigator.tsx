/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStackNavigator from './FeedStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import NotificationsScreen from '../screens/Notifications/Notifications';
import Icon from 'react-native-vector-icons/Ionicons';

// Define route names as a type for strong typing in TypeScript
type RouteName = 'FeedStack' | 'SearchStack' | 'Notifications';

// Define Props for tabBarIcon to ensure correct typing
interface TabBarIconProps {
  routeName: RouteName;
  focused: boolean;
  color: string;
  size: number;
}

// Centralized function for selecting icon names
const getIconName = ({routeName, focused}: TabBarIconProps): string => {
  const icons: Record<RouteName, {active: string; inactive: string}> = {
    FeedStack: {active: 'earth', inactive: 'earth-outline'},
    SearchStack: {active: 'search', inactive: 'search-outline'},
    Notifications: {active: 'notifications', inactive: 'notifications-outline'},
  };

  return focused ? icons[routeName].active : icons[routeName].inactive;
};

const Tabs = createBottomTabNavigator();

const HomeTabsNavigator: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            name={getIconName({
              routeName: route.name as RouteName,
              focused,
              color,
              size,
            })}
            size={size}
            color={color}
          />
        ),
      })}>
      <Tabs.Screen
        name="FeedStack"
        component={FeedStackNavigator}
        options={{title: 'Inicio'}}
      />
      <Tabs.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{title: 'Buscar'}}
      />
      <Tabs.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{title: 'Notificaciones'}}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabsNavigator;
