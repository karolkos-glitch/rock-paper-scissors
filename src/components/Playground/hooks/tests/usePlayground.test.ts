import { act, renderHook, waitFor } from "@testing-library/react"
import usePlayground from "../usePlayground"

describe('usePlayground', () => { 
  it('should render with initial value: "USER_CHOICE"', () => {
    const {result} = renderHook(() => usePlayground());

    expect(result.current.gameStage).toEqual('USER_CHOICE');
    expect(result.current.tryAgain).toBeUndefined();
    expect(result.current.userChoice).toBeNull();
    expect(result.current.houseChoice).toBeNull();
    expect(result.current.result).toBeNull();
    expect(result.current.chooseOption).toBeDefined();
  });

  it(`after executing choose option, gameStage should equals "WAITING_FOR_USER_CHOICE", 
  then "HOUSE CHOICE" and, at the end "RESULT"`, () => {
    const {result} = renderHook(() => usePlayground());

    act(() => {
      result.current.chooseOption('ROCK');
    });

    waitFor(() => {
      expect(result.current.gameStage).not.toEqual('USER_CHOICE');
      expect(result.current.gameStage).toEqual('WAITNG_FOR_HOUSE_CHOICE');

      expect(result.current.gameStage).not.toEqual('WAITNG_FOR_HOUSE_CHOICE');
      expect(result.current.gameStage).toEqual('HOUSE_CHOICE');

      expect(result.current.gameStage).not.toEqual('HOUSE_CHOICE');
      expect(result.current.gameStage).toEqual('RESULT');
    });
  })

  it('When gameStage is Result, tryAgain is taking you to the "USER_CHOICE"', () => {
    const {result} = renderHook(() => usePlayground());
    expect(result.current.tryAgain).toBeUndefined();
    act(() => {
      result.current.chooseOption('ROCK');
    });
    waitFor(() => {
      expect(result.current.gameStage).toEqual('RESULT');
      expect(result.current.tryAgain).toBeDefined();
      // for Typescript
      result.current.tryAgain && result.current.tryAgain();


      expect(result.current.gameStage).toEqual('USER_CHOICE');
    });
  })
})
