import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {Screen} from '@testing-library/dom';

test('renders CATALOGUE RECEIPES', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/CATALOGUE RECEIPES/)).toBeInTheDocument();
});

test(' Should not contain blabla as title', () => {
  const { queryAllByTestId } = render(    
    <Provider store={store}>
      <App />
    </Provider>);
  const id = queryAllByTestId('blabla');
  expect(id).toEqual([]);
});
