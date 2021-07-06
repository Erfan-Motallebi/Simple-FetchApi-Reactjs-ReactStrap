import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ! Components playing as pages
import Home from "../Home/Home";
import Error from "../Error/Error";
import NavbaR from "../Navbar/Navbar";
import ApiGenerator from "../userApi/ApiGenerator";
import About from "../About/About";

export class RouterIndex extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <NavbaR />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/userApi" component={ApiGenerator} />
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
