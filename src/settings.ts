export type GAME_CHOICES = "PAPER" | "ROCK" | "SCISSORS";

export type GAME_RESULT = "DRAW" | "USER_WIN" | "HOUSE_WIN";

interface ResultState {
  type: "RESULT";
  result: GAME_RESULT;
  houseChoice: GAME_CHOICES;
  userChoice: GAME_CHOICES;
}

interface UserChoiceState {
  type: "USER_CHOICE";
}

interface WaitingForHouseChoiceState {
  type: "WAITNG_FOR_HOUSE_CHOICE";
  userChoice: GAME_CHOICES;
}

interface ErrorInGameState {
  type: "ERROR";
}

interface HouseChoiceState {
  type: "HOUSE_CHOICE";
  houseChoice: GAME_CHOICES;
  userChoice: GAME_CHOICES;
}

export type GameState =
  | ResultState
  | UserChoiceState
  | WaitingForHouseChoiceState
  | ErrorInGameState
  | HouseChoiceState;
