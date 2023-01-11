import type { GAME_CHOICES } from "@rps/settings";

const retrieveHouseOption = async (): Promise<GAME_CHOICES> => {
  return new Promise((resolve) => setTimeout(() => resolve("SCISSORS"), 3000));
};

export default retrieveHouseOption;

if(import.meta.vitest){
  const { it, expect } = import.meta.vitest;

  it("should resolve SISSORS", async () => {
    const res = await retrieveHouseOption();

    expect(res).toEqual("SCISSORS");
  })
}