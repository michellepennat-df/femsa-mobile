import {decode, sign} from 'react-native-pure-jwt';

const SECRET_KEY = 'a-secret-with-at-least-32-characters';

interface TokenPayload {
  issuer: string;
  expiration: number;
  data: {
    user: string;
    pass: string;
  };
}

export const createJwtToken = async (
  user: string,
  pass: string,
): Promise<string | undefined> => {
  try {
    const payload: TokenPayload = {
      issuer: 'example.com',
      expiration: new Date().getTime() + 3600 * 1000,
      data: {
        user,
        pass,
      },
    };

    return await sign(payload, SECRET_KEY, {
      alg: 'HS256',
    });
  } catch (error) {
    console.error('Error creating token:', error);
    return undefined;
  }
};

export const parseJwtToken = async (
  jwt: string,
): Promise<object | undefined> => {
  try {
    return await decode(jwt, SECRET_KEY, {skipValidation: true});
  } catch (error) {
    console.error('Error decoding token:', error);
    return undefined;
  }
};
