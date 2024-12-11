import { expect, it } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../src/screens/HomeScreen';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
    })),
  };
});

it('HomeScreen component renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
