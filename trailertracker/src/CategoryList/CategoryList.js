import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../CategoryList/CategoryList.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      listOfCategories: []
    };
  }
 

  componentDidMount() {
    axios
      .get("https://trailerstracker.herokuapp.com/Category")
      .then(res => {
        console.log(res.data);
        this.setState({ listOfCategories: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log("hello");
    let movieCats = this.state.listOfCategories.map(item => {
      return (
        <div key={item.title}>
          <ul className="container">
            <Link to={`/category/${item.title}`}>
              <li className="movieList">{item.title}</li>
            </Link>
          </ul>
        </div>
      );
    });
    return (
      <div>
        <h2 className="homeheader">
          Browse Our Massive List Of Box Office Classics!
        </h2>
        <div>{movieCats}</div>
      </div>
    );
  }
}

export default CategoryList;
