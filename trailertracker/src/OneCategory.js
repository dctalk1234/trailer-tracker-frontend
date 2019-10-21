import React, { Component } from "react";
import { Link } from "react-router-dom";
import catList from "./categoryData.json";


class OneCategory extends Component {
  render() {
    let movieCats = catList;
    let chosenCategory = movieCats.find(element => {
      return element.genre === this.props.match.params.genre;
    });
    return (
      <div>
        <h3>My Category's genre is {chosenCategory.title}</h3>
        <p>Movies in This Category: {chosenCategory.movies}</p>
        <p>Trailer: {chosenCategory.movies[0].trailer}</p>
        <p>Poster: {chosenCategory.movies[0].poster}</p>
        <p>Year: {chosenCategory.movies[0].releaseYear}</p>
        <Link to="/">Back To Home</Link>
      </div>
    );
  }
}

export default OneCategory;
