import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Calculator from '../components/calculator.js';

describe('renders correctly', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router>

        <Calculator />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
