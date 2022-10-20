import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Ao selecionar uma loteria, novos dados são exibidos na tela.', () => {
  render(<App />);
  const selectInput = screen.getByText(/MEGA-SENA/i);
  userEvent.selectOptions()
  expect(linkElement).toBeInTheDocument();
});

