import type { GAME_RESULT } from "@rps/settings";

interface ResultProps {
  result: GAME_RESULT | null;
  children?: React.ReactNode;
}

const Result = ({ result, children = null }: ResultProps) => {
  if (!result) return null;

  const messages: Record<GAME_RESULT, React.ReactNode> = {
    HOUSE_WIN: "YOU LOOSE",
    USER_WIN: "YOU WIN",
    DRAW: "DRAW",
  } as const;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-white text-3xl">{messages[result]}</div>
      {children}
    </div>
  );
};

export default Result;
