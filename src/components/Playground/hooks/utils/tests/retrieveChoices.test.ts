import type { GameState, GAME_CHOICES } from '@rps/settings';
import { retrieveHouseChoice, retrieveUserChoice} from '../retrieveChoices';


interface RetrieveChoicesTestCase {
    gameStateType: GameState["type"];
    expectedResult: GAME_CHOICES | null;
}

describe.concurrent("usePlayground - utils - retrieveChoices", () => {
    describe('retrieveUserChoice', () => {
        it.each<RetrieveChoicesTestCase>([
            {
                gameStateType: "USER_CHOICE",
                expectedResult: null,
            },
            {
                gameStateType: "WAITNG_FOR_HOUSE_CHOICE",
                expectedResult: "PAPER",
            },
            {
                gameStateType: "HOUSE_CHOICE",
                expectedResult: "PAPER"
            },
            {
                gameStateType: "RESULT",
                expectedResult: "PAPER",
            }
        ])("When game state is $gameStateType, the expected result is $expectedResult", ({
            gameStateType, expectedResult
        })=> {
            const gameState = {
                type: gameStateType,
                userChoice: "PAPER"
            } as GameState;

            const result = retrieveUserChoice(gameState);

            expect(result).toEqual(expectedResult);    
        })
    })

    describe('retrieveHouseChoice', () => {
        it.each<RetrieveChoicesTestCase>([
            {
                gameStateType: "USER_CHOICE",
                expectedResult: null,
            },
            {
                gameStateType: "WAITNG_FOR_HOUSE_CHOICE",
                expectedResult: null,
            },
            {
                gameStateType: "HOUSE_CHOICE",
                expectedResult: "PAPER"
            },
            {
                gameStateType: "RESULT",
                expectedResult: "PAPER",
            }
        ])("When game state is $gameStateType, the expected result is $expectedResult", ({
            gameStateType, expectedResult
        })=> {
            const gameState = {
                type: gameStateType,
                houseChoice: "PAPER"
            } as GameState;

            const result = retrieveHouseChoice(gameState);

            expect(result).toEqual(expectedResult);    
        })
    })

});