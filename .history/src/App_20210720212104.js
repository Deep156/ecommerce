import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
//import Filter from "./components/Filter";
import Keyboard from "./pages/Keyboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exactpath="/">
          <Home />
        </Route>
        <Route exactpath="/Keyboards">
          <Keyboard />
        </Route>
        <Route exactpath="/Headphones">
          <Headphone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
