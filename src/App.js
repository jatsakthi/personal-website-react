// Displays only the Home component
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <Fragment>
      {/* css baseline helps remove margin and padding of all the components */}
      <CssBaseline>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </CssBaseline>
    </Fragment>
  );
}

export default App;
