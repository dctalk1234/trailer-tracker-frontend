import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Movie from "./Movie";
import CategoryList from "./CategoryList";
import OneCategory from "./OneCategory";
import catList from "./categoryData.json";
import UpdateCategory from "./UpdateCategory";
import NewCategory from "./NewCategory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: catList
    };
  }
  showCategory(film) {
    this.setState({
      title: film,
      trailer: film
    });
  }

    render() {
        return (
            <div className="App">
                <header>
                    <nav>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/new">
                            New Category
                        </Link>

                    </nav>
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact={true} component={CategoryList}/>
                        <Route path="/new" exact={true} component={NewCategory}/>
                        <Route path="/about" exact={true} component={About}/>
                        <Route path="/movie/:title" exact={true} render={routerProps => <Movie film={this.showCategory} match={routerProps.match}/>}/>
                        <Route path="/category/:title" exact={true} render={routerProps => <OneCategory match={routerProps.match}/>}/>
                        <Route path="/update" exact={true} component={UpdateCategory}/>
                    </Switch>
                </main>
            </div>
        );
    }
}
export default App;
