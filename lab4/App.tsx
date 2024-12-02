/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';

import TodoScreen from './src/TodoScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TodoScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
