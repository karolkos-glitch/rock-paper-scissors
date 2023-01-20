import create from "zustand";
import type { GAME_RESULT } from "./settings";

interface ScoreStoreState {
  score: number;
  setNewScore: (result: GAME_RESULT) => void;
}

export const useScoreStore = create<ScoreStoreState>()((set, get) => ({
  score: 0,
  setNewScore: (result) => {
    const currentScore = get().score;
    if (result === "HOUSE_WIN" && currentScore - 1 >= 0) {
      return set({ score: currentScore - 1 });
    }
    if (result === "USER_WIN") return set({ score: currentScore + 1 });
  },
}));
