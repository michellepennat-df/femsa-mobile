import { deleteCredentials, saveCredentials } from '../storage';
import { createJwtToken } from '../utils/jwt';

export const login = async (username: string, password: string) => {
  // Mock function for login, expecting students to implement secure storage
  if (username === 'user' && password === 'password') {
    // Store token securely here
    const token = await createJwtToken(username, password);
    console.log('Token:', token);

    await saveCredentials(token as string);
    return true;
  } else {
    throw new Error('Invalid credentials');
  }
};

export const logout = async () => {
  // Function for clearing secure storage (to be implemented by students)
  await deleteCredentials();
};
