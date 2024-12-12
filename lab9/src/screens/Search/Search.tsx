import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SearchScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Búsqueda</Text>
      <Button title="Ver detalle" onPress={() => navigation.navigate('Details', { id: 2 })} />
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