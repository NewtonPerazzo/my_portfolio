import Home from './components/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Experience from './components/experience';
import Header from './components/header';

function App() {

  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/portfolio' component={Experience}/>
        </Switch>
    </Router>
  );
}

export default App;
