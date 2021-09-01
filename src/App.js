import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Headers from "./components/header/Header";
import CafeDetail from "./components/cafe-detail/CafeDetail";
import Form from "./components/form/Form";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/cafes" exact component={CafeDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
