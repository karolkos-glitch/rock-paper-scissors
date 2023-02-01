import { screen } from "@testing-library/react";

export const getStarterPlaygroundComponents = () => {
  screen.getByRole('button', {
    name: "Option - SCISSORS"
  });
  screen.getByRole('button', {
    name: "Option - ROCK"
  });
  screen.getByRole('button', {
    name: "Option - PAPER"
  });
};
