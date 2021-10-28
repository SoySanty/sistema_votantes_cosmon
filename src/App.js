import { useState } from "react";
import "./components/styles/App.css";
import Login from "./components/screens/Login";
import Home from "./components/screens/Home";
import VotingBooth from "./components/screens/VotingBooth";
import { GlobalContext } from "./components/scripts/GlobalContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [categoryInfo, setCategoryInfo] = useState({});

  return (
    <GlobalContext>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home setCategory={setCategoryInfo} />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/votar" exact>
            <VotingBooth categoryInfo={categoryInfo} />
          </Route>

          <Route path="/resultados" exact>
            <VotingBooth categoryInfo={categoryInfo} />
          </Route>
        </Switch>
      </Router>
    </GlobalContext>
  );
}

export default App;
