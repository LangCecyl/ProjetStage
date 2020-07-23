import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LinkCV from "./components/LinkCV";
import LinkContact from "./components/LinkContact";
import LinkTechno from "./components/LinkTechno";
import LinkProjets from "./components/LinkProjets";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/linkProjets" component={LinkProjets} />
          <Route path="/linkTechno" component={LinkTechno} />
          <Route path="/linkContact" component={LinkContact} />
          <Route path="/linkCV" component={LinkCV} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}



