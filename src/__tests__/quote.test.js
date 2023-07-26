import { MemoryRouter } from "react-router-dom";
import  renderer from "react-test-renderer" ;
import Quote from "../components/quote.js";
import React from "react";

describe('renders correctly', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
      <MemoryRouter>
        < Quote/>
      </MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });