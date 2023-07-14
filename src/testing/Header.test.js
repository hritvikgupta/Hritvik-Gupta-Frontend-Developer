import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen , fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from '../components/Header';  // Or wherever your Header component is located

describe('Header', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });
});
