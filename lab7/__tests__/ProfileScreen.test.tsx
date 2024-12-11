import { expect, it } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileScreen from '../src/screens/ProfileScreen';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
    })),
  };
});

it('ProfileScreen component renders correctly', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
