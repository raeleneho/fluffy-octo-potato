import { render } from "@testing-library/react";

import UserCard from "./UserCard";

test("Unchecked Radio", () => {
  const { container } = render(<UserCard name="Rae" role="boss" />);

  expect(container).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
