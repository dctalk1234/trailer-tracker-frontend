import React, { Component } from "react";
import { Link } from "react-router-dom";
import OneCategory from "./OneCategory";
import catList from "./categoryData.json";


class CategoryList extends Component {
  constructor() {
    super();
  }

  render() {
    let movieCats = catList.map(item => {
      return (
        <div key={item.genre}>
          <h2>Browse Our Massive List Of Box Office Classics!</h2>
          <p>
            <Link to={"/category" + item.title}>Select Category</Link>
          </p>
        </div>
      );
    });
    return <div>{movieCats}</div>;
  }
}

export default CategoryList;
