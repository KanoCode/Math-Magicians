import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
