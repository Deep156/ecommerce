import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
import CustomProvider from "./misc/CustomProvider";
import Checkout from "./pages/Checkout";
import Keyboard from "./pages/Keyboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withRouter(Home)} />

        <Route exact path="/Keyboards" component={withRouter(Keyboard)} />

        <Route exact path="/Headphones" component={withRouter(Headphone)} />

        <Route exactpath="/checkout">
          <CustomProvider>
            <Checkout />
          </CustomProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
