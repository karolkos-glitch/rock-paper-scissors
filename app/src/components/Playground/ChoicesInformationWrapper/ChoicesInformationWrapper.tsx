import { Fragment } from "react";
import type { GAME_CHOICES } from "@rps/settings";
import Option from "@rps/components/Playground/Option";
import ChoicePresentation from "./ChoicePresentation";
import { Transition } from "@headlessui/react";
import FadeInTransitionWrapper from "@rps/components/FadeInTransitionWrapper";

interface ChoicesInformationWrapperProps {
  userChoice: GAME_CHOICES | null;
  houseChoice: GAME_CHOICES | null;
  children?: React.ReactNode;
  shouldEnterAnimationAppear?: boolean;
}

const ChoicesInformationWrapper = ({
  children = null,
  userChoice,
  houseChoice,
  shouldEnterAnimationAppear = false,
}: ChoicesInformationWrapperProps) => {
  const placeHolderStyles =
    "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] bg-bg-2";
  return (
    <FadeInTransitionWrapper appear={shouldEnterAnimationAppear}>
      <div className="grid grid-flow-col justify-center items-center gap-16 m-w-full">
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
    </FadeInTransitionWrapper>
  );
};

export default ChoicesInformationWrapper;
