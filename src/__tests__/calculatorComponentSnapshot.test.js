import renderer from "react-test-renderer";
import calculator from "../Components/calculator";

it("renders correctly", () => {
  const tree = renderer.create(<calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
