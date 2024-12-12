import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DetailsScreen from '../screens/Home/Details';
import HomeScreen from '../screens/Home/Home';

const FeedStack = createNativeStackNavigator();

export default function FeedStackNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <FeedStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </FeedStack.Navigator>
  );
}
