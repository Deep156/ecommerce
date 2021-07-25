import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import Headphone from "./pages/Headphone";

import Keyboard from "./pages/Keyboard";
function App() {
  return (
    <Router>
      <Switch>
        <Route exactpath="/">
          <Keyboard />
        </Route>
        <Route exactpath="/Keyboards">
          <Home />
        </Route>
        <Route exactpath="/Headphones">
          <Headphone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
