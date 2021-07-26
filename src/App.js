import './components/styles/App.css';
import Login from './components/screens/Login'
import Home from './components/screens/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
