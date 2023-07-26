import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Header from '../components/header';
import App from '../App';
describe('renders correctly', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render header on screen', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    waitFor(() =>
      expect(screen.findByText('Math Magicians')).toBeInTheDocument()
    );
  });

  it('should navigate to calculator', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByText(/calculator/i));
    expect(screen.getByText(/Let's do some math/i)).toBeInTheDocument();
  });
  it('should naviaget to quotes', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByText(/Quotes/i));
    await waitForElementToBeRemoved(screen.getByLabelText('loading-msg'));
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
