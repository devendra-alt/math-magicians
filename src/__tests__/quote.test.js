import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Quote from '../components/quote.js';
import React from 'react';

describe('renders correctly', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Quote />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should print quote on screen', async () => {
    render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('loading-msg')).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.getByLabelText('loading-msg'));
    expect(
      await screen.getByText(
        'A great empire, like a great cake, is most easily diminished at the edges.'
      )
    ).toBeInTheDocument();
  });
});
