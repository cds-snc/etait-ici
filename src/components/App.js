import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Page from "./Page";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Page} />
  </Switch>
);

export default App;
