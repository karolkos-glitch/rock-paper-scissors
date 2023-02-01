interface GameWrapperProps {
  headerComponent?: React.ReactNode;
  children?: React.ReactNode;
  gameRulesModalHandler?: React.ReactNode;
}

const GameWrapper = ({
  children = null,
  headerComponent = null,
  gameRulesModalHandler = null,
}: GameWrapperProps) => {
  return (
    <div>
      {headerComponent}
      {children}
      {gameRulesModalHandler}
    </div>
  );
};

export default GameWrapper;
