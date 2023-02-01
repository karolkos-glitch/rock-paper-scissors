import './__mocks__/intersectionObserverMock';
import { fireEvent, render, screen } from "@testing-library/react";
import GameRulesModalHandler from "..";

describe('<GameRulesModalHandler />', () => {
  it('should render visible button', () => {
    render(<GameRulesModalHandler />)

    screen.getByRole('button', { 
      name: "Show rules",
    });
  });

  it('after clicking "Show rules" button, should render a modal with "Game rules" image', async () => {
    render(<GameRulesModalHandler />)

    fireEvent.click(screen.getByRole('button', { 
        name: "Show rules",
    }));

    await screen.findByAltText('Game rules');
  })
})