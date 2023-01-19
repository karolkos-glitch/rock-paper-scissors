import { GAME_CHOICES } from "@rps/settings";

interface OptionProps {
  type: GAME_CHOICES;
}

const Option = ({ type }: OptionProps) => {
  const borderColors: Record<GAME_CHOICES, string> = {
    SCISSORS: "hsl(39, 89%, 49%)",
    ROCK: "hsl(349, 71%, 52%)",
    PAPER: "hsl(230, 89%, 62%)",
  };
  const images: Record<GAME_CHOICES, string> = {
    SCISSORS: "/icon-scissors.svg",
    ROCK: "/icon-rock.svg",
    PAPER: "/icon-paper.svg",
  };

  return (
    <div
      style={{ border: `16px solid ${borderColors[type]}` }}
      className={
        "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] flex justify-center items-center bg-white"
      }
    >
      <figure>
        <img src={images[type]} alt={`Option - ${type}`} />
      </figure>
    </div>
  );
};

export default Option;
