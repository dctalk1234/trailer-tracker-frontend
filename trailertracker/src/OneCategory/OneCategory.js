import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./OneCategory.css";
import axios from "axios";

export default class OneCategory extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      redirect: false
    };
    this.deleteCategory = this.deleteCategory.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  deleteCategory() {
    axios
      .delete(`https://trailerstracker.herokuapp.com/Category/${this.props.match.params.title}`)
      .then(res => {
        this.setRedirect();
        // this.setState({ movies: res.data.movies });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setRedirect() {
    this.setState({ redirect: true });
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/trailer-tracker-frontend" />;
    }
  }

  componentDidMount() {
    axios
      .get(`https://trailerstracker.herokuapp.com/Category/${this.props.match.params.title}`)
      .then(res => {
        console.log(res.data.movies);

        this.setState({ movies: res.data.movies });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let list = this.state.movies.map(movie => {
      return (
        <div className="onePoster">
          <Link to={`/trailer-tracker-frontend/movie/${movie.title}`}>
            <img className="poster" src={movie.poster}></img>
            <h6 className="posterName">{movie.title}</h6>

          </Link>
        </div>
      );
    });
    console.log(this.state.redirect);

    return (
      <div >
        {this.renderRedirect()}
        <h3 className="homeheader">The Chosen Category is {this.props.match.params.title}</h3>
        <div className="oneCatposterHolder">

          {list}
        </div>


        <button onClick={this.deleteCategory} className="deleteCategory">
          Delete This Category
				</button>

        <Link to="/trailer-tracker-frontend">
          <button className="backtoHome">Back To Home</button>
        </Link>

        <Link to={`/trailer-tracker-frontend/Category/update/${this.props.match.params.title}`}>
          <button className="updatecat">Update this Category </button>
        </Link>
      </div>
    );
  }
}
