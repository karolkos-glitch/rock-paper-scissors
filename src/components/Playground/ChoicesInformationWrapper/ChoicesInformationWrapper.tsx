import type { GAME_CHOICES } from "@rps/settings";
import Option from "@rps/components/Playground/Option";
import ChoicePresentation from "./ChoicePresentation";

interface ChoicesInformationWrapperProps {
  userChoice: GAME_CHOICES | null;
  houseChoice: GAME_CHOICES | null;
  children?: React.ReactNode;
}

const ChoicesInformationWrapper = ({
  children = null,
  userChoice,
  houseChoice,
}: ChoicesInformationWrapperProps) => {
  const placeHolderStyles =
    "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] bg-bg-2";
  return (
    <div className="grid grid-flow-col justify-center items-center gap-16">
      <ChoicePresentation label="YOU PICKED">
        {userChoice ? (
          <Option type={userChoice} />
        ) : (
          <div className={placeHolderStyles} />
        )}
      </ChoicePresentation>
      {children ? (
        <div className="mx-4 text-center row-start-2 row-end-3 col-start-1 col-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3">
          {children}
        </div>
      ) : null}
      <ChoicePresentation label="THE HOUSE PICKED">
        {houseChoice ? (
          <Option type={houseChoice} />
        ) : (
          <div className={placeHolderStyles} />
        )}
      </ChoicePresentation>
    </div>
  );
};

export default ChoicesInformationWrapper;
