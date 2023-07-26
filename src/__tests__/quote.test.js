import { MemoryRouter } from "react-router-dom";
import  renderer from "react-test-renderer" ;
import Quote from "../components/quote.js";
import React from "react";

describe('renders correctly', () => {
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
