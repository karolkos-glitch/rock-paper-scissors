import { useCallback, useState } from "react";
import type { GameState, GAME_CHOICES, GAME_RESULT } from "@rps/settings";
import { useScoreStore } from "@rps/score";
import resolveGame from "./utils/resolveGame";
import retrieveHouseOption from "./utils/retrieveHouseOption";
import {
  retrieveHouseChoice,
  retrieveUserChoice,
} from "./utils/retrieveChoices";

export const usePlayground = () => {
  const { setNewScore } = useScoreStore();
  const [activeState, setActiveState] = useState<GameState>({
    type: "USER_CHOICE",
  });

  // private
  const _displayResult = useCallback(
    (
      result: GAME_RESULT,
      houseChoice: GAME_CHOICES,
      userChoice: GAME_CHOICES
    ) => setActiveState({ type: "RESULT", result, houseChoice, userChoice }),
    []
  );
  const _displayUserChoice = useCallback(
    () => setActiveState({ type: "USER_CHOICE" }),
    []
  );
  const _displayHouseChoice = useCallback(
    (houseChoice: GAME_CHOICES, userChoice: GAME_CHOICES) =>
      setActiveState({ type: "HOUSE_CHOICE", houseChoice, userChoice }),
    []
  );
  const _displayWaitingForHouseChoice = useCallback(
    (userChoice: GAME_CHOICES) =>
      setActiveState({ type: "WAITNG_FOR_HOUSE_CHOICE", userChoice }),
    []
  );

  // public
  const chooseOption = async (userOption: GAME_CHOICES) => {
    _displayWaitingForHouseChoice(userOption);
    const houseOption = await retrieveHouseOption();
    _displayHouseChoice(houseOption, userOption);
    setTimeout(() => {
      const result = resolveGame(userOption, houseOption);
      _displayResult(result, userOption, houseOption);
      setNewScore(result);
    }, 4000);
  };

  const userChoice = retrieveUserChoice(activeState);
  const houseChoice = retrieveHouseChoice(activeState);
  const result = activeState.type === "RESULT" ? activeState.result : null;
  const tryAgain =
    activeState.type === "RESULT" ? _displayUserChoice : undefined;
  const gameStage = activeState.type;

  return {
    gameStage,
    chooseOption,
    tryAgain,
    result,
    houseChoice,
    userChoice,
  };
};

export default usePlayground;
