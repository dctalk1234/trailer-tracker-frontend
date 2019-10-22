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
          <ul>
            <a href={`/category/${item.title}`}>{item.title}</a>
          </ul>
        </div>
      );
    });
    return <div>
     <h2>Browse Our Massive List Of Box Office Classics!</h2>
    {movieCats}
        <Link to="/update">Update Categories</Link>
    </div>;
  }
}

export default CategoryList;
