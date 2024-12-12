import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DetailsScreen({route}: any) {
  const {id} = route.params || {};

  return (
    <View style={styles.container}>
      <Text>Detalle {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
