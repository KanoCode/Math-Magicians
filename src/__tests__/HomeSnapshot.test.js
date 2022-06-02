import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Components/pages/Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter>
      <Home />
    </BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
