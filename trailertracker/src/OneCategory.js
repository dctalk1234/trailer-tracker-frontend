import React, { Component } from "react";
import { Link } from "react-router-dom";
import catList from "./categoryData.json";


export default class OneCategory extends Component {
  render() {
    let chosenCategory = catList.find(element => element.title === this.props.match.params.title);

    let movieChoices = []
    for (let i = 0; i < chosenCategory.movies.length; i++) {
        movieChoices.push(chosenCategory.movies[i].title)
    }

    let movieTrailers = []
    for (let i = 0; i < chosenCategory.movies.length; i++) {
        movieTrailers.push(chosenCategory.movies[i].trailer)
    }

    let moviePosters= []
    for (let i = 0; i < chosenCategory.movies.length; i++) {
        moviePosters.push(chosenCategory.movies[i].poster)
    }

    let movieYears = []
    for (let i = 0; i < chosenCategory.movies.length; i++) {
        movieYears.push(chosenCategory.movies[i].releaseYear)
    }


    return (
        <div>
          <h3>The Chosen Category is {chosenCategory.title}</h3>
          <p>Movies in This Category: {movieChoices}</p>
          <p>Trailer: {movieTrailers}</p>
          <p>Posters: {moviePosters}</p>
          <p>Years Released: {movieYears}</p>
          <Link to="/">Back To Home</Link>
        </div>
      ); 

    };
};
