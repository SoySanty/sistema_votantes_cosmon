import './components/styles/App.css'
import Login from './components/screens/Login'
import Home from './components/screens/Home'
import VotingBooth from './components/screens/VotingBooth'
import { GlobalContext } from './components/scripts/GlobalContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <GlobalContext>
      <Router>
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/votar" exact>
            <VotingBooth />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

        </Switch>
      </Router>
    </GlobalContext>
  );
}

export default App;
