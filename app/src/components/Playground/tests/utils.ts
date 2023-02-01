import { screen } from "@testing-library/react";

export const getStarterPlaygroundComponents = () => {
  expect(screen.getAllByRole("button")).toHaveLength(3);
  screen.getByAltText("Option - SCISSORS");
  screen.getByAltText("Option - PAPER");
  screen.getByAltText("Option - ROCK");
};
