import React, { Component } from "react";
import { Link } from "react-router-dom";
import catList from "./categoryData.json";
import axios from "axios";
import "../App/App.css";


class CategoryList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {

    axios.get(
      'https://localhost:8080/category',
      { title: '' },
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
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
      <h2 className="homeheader ">Browse Our Massive List Of Box Office Classics!</h2>
      {movieCats}
      <Link to="/update">Update Categories</Link>
    </div>;
  }
}

export default CategoryList;
