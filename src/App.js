import React from 'react';
import './App.css';
import InteractiveScene from './components/three/interactiveScene/InteractiveScene';
import Menu from './components/ui/menu/Menu';
import Scan from './pages/scan/Scan';
import Game from './pages/game/Game';
import Pack from './pages/pack/Pack';
import Search from './pages/search/Search';
import Options from './pages/options/Options';
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends React.Component {

  render () {

    return (
        <Router>
          <InteractiveScene />
          <Menu />
          <div className="">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route exact path="/game">
                <Game />
              </Route>
              <Route exact path="/options">
                <Options />
              </Route>
              <Route exact path="/scan">
                <Scan />
              </Route>
              <Route exact path="/pack">
                <Pack />
              </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}
