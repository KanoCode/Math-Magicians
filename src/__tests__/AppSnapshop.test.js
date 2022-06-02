import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter>
      <App />
    </BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
