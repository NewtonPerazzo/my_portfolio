import Home from './components/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import "./App.css";

function App() {

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
