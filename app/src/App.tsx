import "./index.css";
import GameWrapper from "@rps/components/GameWrapper";
import GameHeader from "@rps/components/GameHeader";
import Playground from "@rps/components/Playground";
import OpenInstructionsButtonArea from "@rps/components/OpenInstructionsButtonArea";

function App() {
  return (
    <GameWrapper headerComponent={<GameHeader />} openInstructionsButtonArea={<OpenInstructionsButtonArea />} >
      <Playground />
    </GameWrapper>
  );
}

export default App;
