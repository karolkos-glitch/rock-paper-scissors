import type { GAME_CHOICES } from "@rps/settings";

interface InGameViewProps {
  renderOption: (option: GAME_CHOICES, index: number) => React.ReactNode;
}

const optionsArray = ["ROCK", "PAPER", "SCISSORS"] as const;

const InGameView = ({ renderOption }: InGameViewProps) => {
  return (
    <div className="grid grid-rows-2 grid-flow-col justify-center gap-8">
      {optionsArray.map((option, index) => renderOption(option, index))}
    </div>
  );
};

export default InGameView;
