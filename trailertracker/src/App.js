import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Movie from "./Movie";
import CategoryList from "./CategoryList";
import OneCategory from "./OneCategory";

function App() {
  return (
    <div className="App">
      <header >
        <nav>
            <Link to="/">
                Home
            </Link>
          <Link to="/about">
            About
          </Link>

        </nav>
      </header>
      <main>
        <Switch>
            <Route path="/" exact={true} component={CategoryList}/>
          <Route path="/about" exact={true} component={About}/>
          <Route path="/movie" exact={true} coponent={Movie}/>
          <Route path="/category" exact={true} component={OneCategory}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
