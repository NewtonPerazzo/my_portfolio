import "./App.css";
import Balls from "./components/ballsDetails";
import Header from "./components/header";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Balls />
        <Title />
      </div>
    </div>
  );
}

export default App;
