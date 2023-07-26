import { MemoryRouter } from "react-router-dom";
import  renderer from "react-test-renderer" ;
import Header from "../components/header.js";
import React from "react";

describe('renders correctly', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
      <MemoryRouter>
        < Header/>
      </MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });