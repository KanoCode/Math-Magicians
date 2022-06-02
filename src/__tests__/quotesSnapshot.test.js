import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quotes from '../Components/pages/quote';

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter>
      <Quotes />
    </BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
