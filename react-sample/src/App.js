
/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Farshad Haddadi Student ID:******* Date: ********
********************************************************************************/

import React, { Component } from 'react';
import MainContainer from './Components/MainContainer';
import Overview from './Components/Overview';
import Projects from './Components/Projects';
import Teams from './Components/Teams';
import Employees from './Components/Employees';
import { Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (

      <Switch>

        <Route exact path='/' render={() => (
          <Overview />
        )} />

        <Route exact path='/projects' render={() => (
          <Projects />
        )} />

        <Route exact path='/teams' render={() => (
          <Teams />
        )} />
        <Route exact path='/employees' render={() => (
          <Employees />
        )} />

        <Route render={() => (
          <MainContainer sidebar="" />
        )} />

      </Switch>

    );
  }

}
export default App;