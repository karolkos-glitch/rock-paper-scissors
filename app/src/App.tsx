import "./index.css";
import GameWrapper from "@rps/components/GameWrapper";
import GameHeader from "@rps/components/GameHeader";
import Playground from "@rps/components/Playground";
import GameRulesModalHandler from "@rps/components/GameRulesModalHandler";

function App() {
  return (
    <GameWrapper
      headerComponent={<GameHeader />}
      gameRulesModalHandler={<GameRulesModalHandler />}
    >
      <Playground />
    </GameWrapper>
  );
}

export default App;
