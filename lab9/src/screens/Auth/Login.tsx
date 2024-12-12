import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen({navigation}: any) {
  const {login} = useAuth();

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Registrate"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Inicia Sesión" onPress={login} />
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
