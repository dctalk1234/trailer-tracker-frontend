import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
// import catList from "../CategoryList/categoryData.json";
import UpdateCategory from "../UpdateCategory/UpdateCategory"
import axios from 'axios'

export default class OneCategory extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    // axios.get(`http://localhost:8080/Category/${"Action"}`)
    axios.get(`http://localhost:8080/Category/${this.props.match.params.title}`)
      .then(res => {
        console.log(res.data.movies);

        this.setState({ movies: res.data.movies });

      })
      .catch(error => {
        console.log(error);
      })

  }

  render() {
    let list = this.state.movies.map(movie => {
      return (
        <div>
          <img src={movie.poster}></img>
        </div>
      )
    })

    return (
      <div>
        {list}
      <h2>hello</h2>
     </div>

    )
  }
}
