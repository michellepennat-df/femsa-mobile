import * as Keychain from 'react-native-keychain';

const AUTH_TOKEN_KEY = 'authToken';

export const saveCredentials = async (authToken: string) => {
  await Keychain.setGenericPassword(AUTH_TOKEN_KEY, authToken);
};

export const getCredentials = async () => {
  try {
    const {username: token} =
      (await Keychain.getGenericPassword()) as Keychain.UserCredentials;
    if (token) {
      console.log('Credentials successfully loaded: ' + token);
      return token;
    } else {
      console.log('No credentials stored');
    }
  } catch (error) {
    console.error('Failed to access Keychain', error);
  }
};

export const deleteCredentials = async () => {
  await Keychain.resetGenericPassword();
};
