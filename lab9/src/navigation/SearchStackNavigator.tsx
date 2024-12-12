import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DetailsScreen from '../screens/Home/Details';
import SearchScreen from '../screens/Search/Search';

const SearchStack = createNativeStackNavigator();

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <SearchStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
    </SearchStack.Navigator>
  );
}
