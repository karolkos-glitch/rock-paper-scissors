import type { GameState, GAME_CHOICES } from "../../../../settings";

export const retrieveUserChoice = (
  gameState: GameState
): GAME_CHOICES | null => {
  if (gameState.type !== "ERROR" && gameState.type !== "USER_CHOICE") {
    return gameState.userChoice;
  }
  return null;
};

export const retrieveHouseChoice = (
  gameState: GameState
): GAME_CHOICES | null => {
  if (
    gameState.type !== "ERROR" &&
    gameState.type !== "USER_CHOICE" &&
    gameState.type !== "WAITNG_FOR_HOUSE_CHOICE"
  ) {
    return gameState.houseChoice;
  }
  return null;
};
