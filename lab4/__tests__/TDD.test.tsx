import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TodoScreen from '../src/TodoScreen';

describe('TodoScreen - Adding Tasks', () => {
  it('should add a task to the list', () => {
    const {getByTestId, getByText} = render(<TodoScreen />);
    const taskInput = getByTestId('taskInput');
    const addButton = getByTestId('addButton');

    fireEvent.changeText(taskInput, 'New Task');
    fireEvent.press(addButton);
    expect(getByText('New Task')).toBeTruthy();
  });
});
