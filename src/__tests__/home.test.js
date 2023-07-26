import renderer from 'react-test-renderer';
import App from '../App.js';
describe('renders correctly', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
