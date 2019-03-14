import React, { Component } from 'react';
import './App.css';

import HomeNav from "./component/HomeNav";
import Dashboard from "./component/Dashboard";


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeNav/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
