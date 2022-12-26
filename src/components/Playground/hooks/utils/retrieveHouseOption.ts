import type { GAME_CHOICES } from "../../../../settings";

const retrieveHouseOption = async (): Promise<GAME_CHOICES> => {
  return new Promise((resolve) => setTimeout(() => resolve("SCISSORS"), 3000));
};

export default retrieveHouseOption;
