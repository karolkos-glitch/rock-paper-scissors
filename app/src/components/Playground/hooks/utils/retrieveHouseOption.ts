import type { GAME_CHOICES } from "@rps/settings";

const retrieveHouseOption = async (): Promise<GAME_CHOICES> => {
  const optionString = String(Math.floor(Math.random() * 3 + 1));
  const results: Record<string, GAME_CHOICES> = {
    "1": "PAPER",
    "2": "ROCK",
    "3": "SCISSORS"
  }

  return new Promise((resolve) => setTimeout(() => resolve(results[optionString]), 3000));
};

export default retrieveHouseOption;

if(import.meta.vitest){
  const { it, expect } = import.meta.vitest;

  it("should resolve the result", async () => {
    const res = await retrieveHouseOption();

    const testResult = !!["PAPER", "ROCK", "SCISSORS"].find((potentialResult) => res === potentialResult);

    expect(testResult).toBeTruthy();
  })
}