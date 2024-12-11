import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {login} from '../services/AuthService';

type ErrorType = {
  username?: string;
  password?: string;
  general?: string;
};

type RootStackParamList = {
  Profile: undefined;
};

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<ErrorType>({});

  useEffect(() => {
    const validateInputs = (): void => {
      let usernameError = '';
      let passwordError = '';

      if (username.trim().length < 3) {
        usernameError = 'Username must be at least 3 characters long.';
      }

      if (password.trim().length < 8) {
        passwordError = 'Password must be at least 8 characters long.';
      }

      setError({username: usernameError, password: passwordError, general: ''});
    };

    validateInputs();
  }, [username, password]);

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigation.navigate('Profile');
    } catch (err) {
      setError({general: 'Login failed'});
    }
  };

  console.log(username, password);

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      {error.general ? <Text>{error?.general}</Text> : null}
      {error.username ? <Text>{error?.username}</Text> : null}
      {error.password ? <Text>{error?.password}</Text> : null}
    </View>
  );
};

export default LoginScreen;
