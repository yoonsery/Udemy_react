import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  beforeEach(() => {
    render(<Async />);
  });

  test('renders posts if request succeeds', async () => {
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
