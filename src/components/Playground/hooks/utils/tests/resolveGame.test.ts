import resolveGame from "../resolveGame";
import type { GAME_CHOICES, GAME_RESULT } from "@rps/settings";

interface OneGameConfig {
  houseChoice: GAME_CHOICES;
  gameResult: GAME_RESULT;
}
describe.concurrent("usePlayground - utils - resolveGame", () => {
  describe("User choose ROCK", () => {
    it.each<OneGameConfig>([
      {
        houseChoice: "ROCK",
        gameResult: "DRAW",
      },
      {
        houseChoice: "PAPER",
        gameResult: "HOUSE_WIN",
      },
      {
        houseChoice: "SCISSORS",
        gameResult: "USER_WIN",
      },
    ])(
      "house choose $houseChoice, so result of the game is: $gameResult",
      ({ houseChoice, gameResult }) => {
        const result = resolveGame("ROCK", houseChoice as GAME_CHOICES);

        expectTypeOf(result).toMatchTypeOf<GAME_RESULT>();
        expect(result).toEqual(gameResult);
      }
    );
  });

  describe("User choose SCISSORS", () => {
    it.each<OneGameConfig>([
      {
        houseChoice: "SCISSORS",
        gameResult: "DRAW",
      },
      {
        houseChoice: "PAPER",
        gameResult: "USER_WIN",
      },
      {
        houseChoice: "ROCK",
        gameResult: "HOUSE_WIN",
      },
    ])(
      "house choose $houseChoice, so result of the game is: $gameResult",
      ({ houseChoice, gameResult }) => {
        const result = resolveGame("SCISSORS", houseChoice as GAME_CHOICES);

        expectTypeOf(result).toMatchTypeOf<GAME_RESULT>();
        expect(result).toEqual(gameResult);
      }
    );
  });

  describe("User choose PAPER", () => {
    it.each<OneGameConfig>([
      {
        houseChoice: "PAPER",
        gameResult: "DRAW",
      },
      {
        houseChoice: "ROCK",
        gameResult: "USER_WIN",
      },
      {
        houseChoice: "SCISSORS",
        gameResult: "HOUSE_WIN",
      },
    ])(
      "house choose $houseChoice, so result of the game is: $gameResult",
      ({ houseChoice, gameResult }) => {
        const result = resolveGame("PAPER", houseChoice as GAME_CHOICES);

        expectTypeOf(result).toMatchTypeOf<GAME_RESULT>();
        expect(result).toEqual(gameResult);
      }
    );
  });

  it("throws Error", () => {
    expect(() => resolveGame("" as GAME_CHOICES, "" as GAME_CHOICES)).toThrowError("INVALID OPTION");
  })
});
