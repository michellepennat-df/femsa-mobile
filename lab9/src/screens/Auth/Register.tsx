import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function RegisterScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Registro</Text>
      <Button
        title="Ya tienes cuenta? Inicia Sesión"
        onPress={() => navigation.replace('Login')}
      />
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
