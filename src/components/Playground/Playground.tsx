import usePlayground from "./hooks/usePlayground";
import InGameView from "./InGameView";
import Option from "./Option";
import Result from "./Result";
import ChoicesInformationWrapper from "./ChoicesInformationWrapper";

const Playground = () => {
  const { gameStage, tryAgain, result, houseChoice, userChoice, chooseOption } =
    usePlayground();
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
        houseChoice={houseChoice}
        userChoice={userChoice}
      >
        <Result result={result}>
          <button
            className="p-4 m-4 bg-white text-bg-2 hover:text-red rounded-lg"
            onClick={tryAgain}
          >
            PLAY AGAIN
          </button>
        </Result>
      </ChoicesInformationWrapper>
    ),
  };

  return <main className="p-8">{views[gameStage]}</main>;
};

export default Playground;
