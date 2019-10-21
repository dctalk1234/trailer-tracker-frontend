import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/about">
            About
          </Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/about" exact={true} component={About}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
