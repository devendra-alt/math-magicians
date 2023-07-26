import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Calculator from '../components/calculator.js';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
describe('renders correctly', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>
    );
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have calculator have title on screen', async () => {
    const titleNode = await screen.getByText("Let's do some math");
    expect(titleNode).toHaveTextContent("Let's do some math");
  });
  it('should have calculator buttons on screen', () => {
    const buttonNodes = screen.getAllByLabelText('calculator-btn');
    expect(buttonNodes).toHaveLength(19);
  });
  it('should add running value (aka next)', () => {
    const buttonNodes = screen.getAllByLabelText('calculator-btn');
    let sevenNode = null;
    let fiveNode = null;
    buttonNodes.forEach((element) => {
      if (element.textContent === '7') {
        sevenNode = element;
      }
      if (element.textContent === '5') {
        fiveNode = element;
      }
    });

    sevenNode.innerText = '7';
    fiveNode.innerText = '5';

    fireEvent.click(sevenNode);
    fireEvent.click(fiveNode);

    const answer = screen.getByLabelText('calculator-answer-p-span-next');
    expect(answer.textContent).toBe('75');
  });
  it('Backspace should work', async () => {
    const answer_ = screen.getByLabelText('calculator-answer-p-span-next');
    await userEvent.keyboard('{7}');
    await userEvent.keyboard('{7}');
    await userEvent.keyboard('{7}');
    await userEvent.keyboard('{7}');
    await userEvent.keyboard('{Backspace}');
    expect(answer_.textContent).toBe('777');
  });
});
