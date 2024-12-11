/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserProfileList from './src/screen/UserProfileList';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <QueryClientProvider client={queryClient}>
          <UserProfileList />
        </QueryClientProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
