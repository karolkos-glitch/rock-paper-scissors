interface GameWrapperProps {
  headerComponent?: React.ReactNode;
  children?: React.ReactNode;
}

const GameWrapper = ({
  children = null,
  headerComponent = null,
}: GameWrapperProps) => {
  return (
    <div>
      {headerComponent}
      {children}
    </div>
  );
};

export default GameWrapper;
