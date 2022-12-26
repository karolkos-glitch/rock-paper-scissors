import { useScoreStore } from "@rps/score";

const GameHeader = () => {
  const { score } = useScoreStore();

  return (
    <div
      className="mx-auto my-12 flex flex-row max-w-[90%] 
          justify-between items-center p-8 border-header-outline border-2 rounded-[16px]"
    >
      <figure>
        <img alt="Rock Paper Scissors" src="/logo.svg" />
      </figure>
      <div
        className="mx-4 px-8 py-4 border-gray-dark border-2 text-dark-text text-6xl 
      flex flex-col items-center bg-white rounded-[8px] md:text-6xl md:px-16"
      >
        <span className="text-score-text text-base">SCORE</span>
        {score}
      </div>
    </div>
  );
};

export default GameHeader;
