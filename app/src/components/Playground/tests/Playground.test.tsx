import { render, screen } from "@testing-library/react";
import Playground from "..";
import { getStarterPlaygroundComponents } from "./utils";
import usePlayground from "../hooks/usePlayground";

vi.mock("@rps/components/Playground/hooks/usePlayground");

const getChoiceWrapperHeadingTexts = async () => {
  expect(await screen.findByText(/YOU PICKED/)).toBeTruthy();
  expect(await screen.findByText(/THE HOUSE PICKED/)).toBeTruthy();
};

describe("<Playground />", () => {
  it('If the GameStage equals "USER_CHOICE", render three buttons and img with all three options', () => {
    vi.mocked(usePlayground).mockReturnValueOnce({
      gameStage: "USER_CHOICE",
      userChoice: null,
      houseChoice: null,
    } as unknown as ReturnType<typeof usePlayground>);

    render(<Playground />);

    getStarterPlaygroundComponents();
  });

  it('If the GameStage equals "WAITING_FOR_HOUSE_CHOICE", render ChoicesInformationWrapper', () => {
    vi.mocked(usePlayground).mockReturnValueOnce({
      gameStage: "WAITNG_FOR_HOUSE_CHOICE",
      userChoice: "PAPER",
      houseChoice: null,
    } as unknown as ReturnType<typeof usePlayground>);

    render(<Playground />);

    getChoiceWrapperHeadingTexts();
  });

  it('If the GameStage equals "HOUSE_CHOICE", render ChoicesInformationWrapper', () => {
    vi.mocked(usePlayground).mockReturnValueOnce({
      gameStage: "HOUSE_CHOICE",
      userChoice: "PAPER",
      houseChoice: "ROCK",
    } as unknown as ReturnType<typeof usePlayground>);

    render(<Playground />);

    getChoiceWrapperHeadingTexts();
  });

  describe('If the GameStage equals "RESULT', () => {
    it('render ChoicesInformationWrapper and "Try Again" button', async () => {
      vi.mocked(usePlayground).mockReturnValueOnce({
        gameStage: "RESULT",
        userChoice: "PAPER",
        houseChoice: "ROCK",
        result: "DRAW",
      } as unknown as ReturnType<typeof usePlayground>);

      render(<Playground />);

      getChoiceWrapperHeadingTexts();
      expect(
        await screen.findByRole("button", {
          name: "PLAY AGAIN",
        })
      ).toBeTruthy();
    });

    it('render draw content when the result is "DRAW', async () => {
      vi.mocked(usePlayground).mockReturnValueOnce({
        gameStage: "RESULT",
        userChoice: "PAPER",
        houseChoice: "ROCK",
        result: "DRAW",
      } as unknown as ReturnType<typeof usePlayground>);

      render(<Playground />);

      expect(await screen.findByText(/DRAW/));
    });

    it('render user win content when the result is "USER_WIN', async () => {
      vi.mocked(usePlayground).mockReturnValueOnce({
        gameStage: "RESULT",
        userChoice: "PAPER",
        houseChoice: "ROCK",
        result: "USER_WIN",
      } as unknown as ReturnType<typeof usePlayground>);

      render(<Playground />);

      expect(await screen.findByText(/YOU WIN/));
    });

    it('render use loose content when the result is "HOUSE_WIN', async () => {
      vi.mocked(usePlayground).mockReturnValueOnce({
        gameStage: "RESULT",
        userChoice: "PAPER",
        houseChoice: "ROCK",
        result: "HOUSE_WIN",
      } as unknown as ReturnType<typeof usePlayground>);

      render(<Playground />);

      expect(await screen.findByText(/YOU LOOSE/));
    });
  });
});
