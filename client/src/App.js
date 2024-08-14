import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CommunityCardGrid from "./CardGrid/CommunityCardGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <CommunityCardGrid />
    </div>
  );
}

export default App;
