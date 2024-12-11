import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { logout } from '../services/AuthService';

type ProfileScreenProps = {
  navigation: StackNavigationProp<any, 'ProfileScreen'>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Login');
    } catch (error) {
      setErrorMessage('Logout failed');
    }
  };

  return (
    <View>
      <Text>Welcome to the Profile Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default ProfileScreen;


