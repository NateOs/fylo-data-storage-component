import "./styles/App.scss";
import Uploader from "./components/Uploader";
import SpaceStat from "./components/SpaceStat";

function App() {
  return (
    <div className="container">
      <Uploader />
      <SpaceStat />
    </div>
  );
}

export default App;
