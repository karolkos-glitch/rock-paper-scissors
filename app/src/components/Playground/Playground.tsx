import { lazy, Suspense } from "react";
import usePlayground from "./hooks/usePlayground";
import InGameView from "./InGameView";
import Option from "./Option";

const Playground = () => {
  const { gameStage, tryAgain, result, houseChoice, userChoice, chooseOption } =
    usePlayground();
  const ChoicesInformationWrapper = lazy(
    () => import("./ChoicesInformationWrapper")
  );
  const Result = lazy(() => import("./Result"));

  const views: Record<typeof gameStage, React.ReactNode> = {
    USER_CHOICE: (
      <InGameView
        renderOption={(option, index) => {
          const gridClasses =
            index === 2
              ? "row-start-2 row-end-3 col-start-1 col-end-3 flex justify-center items-center"
              : "";
          return (
            <button
              key={option}
              className={gridClasses}
              onClick={() => chooseOption(option)}
            >
              <Option type={option} />
            </button>
          );
        }}
      />
    ),
    WAITNG_FOR_HOUSE_CHOICE: (
      <ChoicesInformationWrapper
        shouldEnterAnimationAppear
        houseChoice={houseChoice}
        userChoice={userChoice}
      />
    ),
    HOUSE_CHOICE: (
      <ChoicesInformationWrapper
        houseChoice={houseChoice}
        userChoice={userChoice}
      />
    ),
    RESULT: (
      <ChoicesInformationWrapper
        shouldEnterAnimationAppear
        houseChoice={houseChoice}
        userChoice={userChoice}
      >
      <Suspense fallback={<div className="h-[100vh] w-[100vw]" />}>
          <Result result={result}>
            <button
              className="p-4 m-4 bg-white text-dark-text hover:text-red rounded-lg"
              onClick={tryAgain}
            >
              PLAY AGAIN
            </button>
          </Result>
        </Suspense>
      </ChoicesInformationWrapper>
    ),
  };

  return (
    <main data-testid="playground">
      <Suspense fallback={<div className="h-[100vh] w-[100vw]" />}>{views[gameStage]}</Suspense>
    </main>
  );
};

export default Playground;
