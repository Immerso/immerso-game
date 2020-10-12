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
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {GameAPI} from "./api/Game";

export default class App extends React.Component {

  componentDidMount() {
    let api = new GameAPI();
    let userName;
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if(user === null){
      if(window.location.pathname === "/")
        userName = window.prompt("Tu nombre de usuario: ");
      api.createRandomUser(userName)
        .then((data) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data));
          axios.defaults.headers.common['Authorization'] = `Basic ${btoa(data.data.username + ":qwerty12345")}`;
          console.log(`Basic ${btoa(data.data.username + ":qwerty12345")}`);
        })
        .catch(console.error);
    }else{
      axios.defaults.headers.common['Authorization'] = `Basic ${btoa(user.data.username + ":qwerty12345")}`;
      console.log(`Basic ${btoa(user.data.username + ":qwerty12345")}`);
    }

  }

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
              {/*<Route exact path="/game">*/}
              {/*  <Game />*/}
              {/*</Route>*/}
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
