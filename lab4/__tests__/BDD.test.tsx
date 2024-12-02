import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import App from '../App';

describe('TodoScreen - Task Completion', () => {
  it('should add task to the list and complete it', () => {
    const taskName = 'Task 1';
    const {getByTestId, getByText} = render(<App />);
    const input = getByTestId('taskInput');
    const addButton = getByTestId('addButton');
    expect(input).toBeTruthy();
    waitFor(() => {
      fireEvent.changeText(input, taskName);
    });
    expect(input.props.value).toBe(taskName);
    waitFor(() => {
      fireEvent.press(addButton);
    });
    const task = getByText(taskName);
    expect(task).toBeDefined();
    const testID = task.props.testID.split('-')[1];
    const completeButton = getByTestId(`completeButton-${testID}`);
    waitFor(() => {
      fireEvent.press(completeButton);
    });
    expect(task.props.style.textDecorationLine).toBe('line-through');
  });
});
