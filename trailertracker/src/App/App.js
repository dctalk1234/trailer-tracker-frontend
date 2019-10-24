import React, { Component } from "react";
import "./App.css";
// import "../index.css";

import { Route, Link, Switch } from "react-router-dom";
import About from "../About/About";
import Movie from "../Movie/Movie";
import CategoryList from "../CategoryList/CategoryList";
import OneCategory from "../OneCategory/OneCategory";
import catList from "../CategoryList/categoryData.json";
import UpdateCategory from "../UpdateCategory/UpdateCategory";
import NewCategory from "../NewCategory/NewCategory";
// import 'bootstrap/dist/css/bootstrap.min.css';


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
            <div className="App container">
                <header>
                    <ul className="nav">
                        <Link to="/">
                            <li className="nav-item">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className="nav-item">About</li>
                        </Link>
                        <Link to="/new">
                            <li className="nav-item"> New Category</li>
                        </Link>

                    </ul>
                </header>
                <main>
                    <Switch><Route path="/trailer-tracker-frontend" exact={true} component={CategoryList} />
                        <Route path="/new" exact={true} component={NewCategory} />
                        <Route path="/about" exact={true} component={About} />
                        <Route path="/movie/:title" exact={true} render={routerProps => <Movie film={this.showCategory} match={routerProps.match} />} />
                        <Route path="/category/:title" exact={true} render={routerProps => <OneCategory match={routerProps.match} />} />
                        <Route path="/category/update/:title" exact={true} render={routerProps => <UpdateCategory match={routerProps.match} />} />
                    </Switch>
                </main>


            </div>
        );
    }
}
export default App;
