import React, { Component } from "react";
import { Link } from "react-router-dom";
import catList from "./categoryData.json";

export default class OneCategory extends Component {
  render() {
    let chosenCategory = catList.find(
      element => element.title === this.props.match.params.title
    );

    let movieChoices = [];
    for (let i = 0; i < chosenCategory.movies.length; i++) {
      movieChoices.push(chosenCategory.movies[i].title);
    }

    let movieTrailers = [];
    for (let i = 0; i < chosenCategory.movies.length; i++) {
      movieTrailers.push(chosenCategory.movies[i].trailer);
    }

    let moviePosters = [];
    for (let i = 0; i < chosenCategory.movies.length; i++) {
      moviePosters.push(chosenCategory.movies[i].poster);
    }
    console.log(moviePosters)

    let movieYears = [];
    for (let i = 0; i < chosenCategory.movies.length; i++) {
      movieYears.push(chosenCategory.movies[i].releaseYear);
    }

    function views() {
    let movieViews = [];
    for (let i = 0; i < chosenCategory.movies.length; i++) {
        let makeViews = document.createElement("div");
        document.querySelector("#viewForm").appendChild(makeViews)
        } 
    }

    return (
      <form id="viewForm">
          <h3>The Chosen Category is {chosenCategory.title}</h3>
          <div>
            <img
              width="150"
              height="250"
              src={moviePosters}
              alt="movie poster"
            ></img>
          <br></br>
        </div>
        <Link to="/">Back To Home</Link>
      </form>
    );
  }
}
