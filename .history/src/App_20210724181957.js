import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
import CartProvider from "./misc/CustomProvider";
import Checkout from "./pages/Checkout";
//import Checkout from "./pages/Checkout";
//import Keyboard from "./pages/Keyboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exactpath="/">
          <CartProvider>
            <Checkout />
          </CartProvider>
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
