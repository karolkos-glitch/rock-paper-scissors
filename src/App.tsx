import "./index.css";
import GameWrapper from "@rps/components/GameWrapper";
import GameHeader from "@rps/components/GameHeader";
import Playground from "@rps/components/Playground";

function App() {
  return (
    <GameWrapper headerComponent={<GameHeader />}>
      <Playground />
    </GameWrapper>
  );
}

export default App;
