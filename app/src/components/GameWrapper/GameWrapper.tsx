interface GameWrapperProps {
  headerComponent?: React.ReactNode;
  children?: React.ReactNode;
  openInstructionsButtonArea?: React.ReactNode;
}

const GameWrapper = ({
  children = null,
  headerComponent = null,
  openInstructionsButtonArea = null,
}: GameWrapperProps) => {
  return (
    <div>
      {headerComponent}
      {children}
      {openInstructionsButtonArea}
    </div>
  );
};

export default GameWrapper;
