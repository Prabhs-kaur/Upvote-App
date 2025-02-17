import { render, fireEvent } from "@testing-library/react";
import Upvote from "../components/Upvote";

test("toggles selection on click", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Upvote selected={false} onClick={handleClick} />);
  
  const button = getByRole("button");
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalled();
});
