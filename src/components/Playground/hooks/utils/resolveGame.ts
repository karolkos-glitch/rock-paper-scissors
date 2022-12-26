import type { GAME_CHOICES, GAME_RESULT } from "../../../../settings";

const resolveGame = (
  userOption: GAME_CHOICES,
  houseOption: GAME_CHOICES
): GAME_RESULT => {
  if (userOption === "PAPER") {
    if (houseOption === "ROCK") return "USER_WIN";
    if (houseOption === "PAPER") return "DRAW";
    if (houseOption === "SCISSORS") return "HOUSE_WIN";
  }

  if (userOption === "ROCK") {
    if (houseOption === "ROCK") return "DRAW";
    if (houseOption === "PAPER") return "HOUSE_WIN";
    if (houseOption === "SCISSORS") return "USER_WIN";
  }

  if (userOption === "SCISSORS") {
    if (houseOption === "ROCK") return "HOUSE_WIN";
    if (houseOption === "PAPER") return "USER_WIN";
    if (houseOption === "SCISSORS") return "DRAW";
  }

  throw new Error("INVALID OPTION");
};

export default resolveGame;
