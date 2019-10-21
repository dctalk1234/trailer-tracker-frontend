import React, { Component } from "react";
import Link from "react-router-dom";
import OneCategory from "./OneCategory";

class CategoryList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Link to="/OneCategory">Select Category</Link>
      </div>
    );
  }
}

export default CategoryList;
