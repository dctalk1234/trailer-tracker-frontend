import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import catList from "../CategoryList/categoryData.json";
import UpdateCategory from "../UpdateCategory/UpdateCategory";
import axios from "axios";

export default class OneCategory extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      Redirect: false
    };
    this.deleteCategory=this.deleteCategory.bind(this);
    // this.setRedirect=this.setRedirect.bind(this);
  }

  deleteCategory() {
    axios
      .delete(`http://localhost:8080/Category/${this.props.match.params.title}`)
      .then(res => {
        console.log(res.data.movies);

        this.setState({ movies: res.data.movies });
      
      }).then(() => {
        // this.setRedirect()
        window.location="/";
      
      })

      .catch(error => {
        console.log(error);
      });
  }

  // setRedirect() { 
  //   this.setState({Redirect: true})
  // }

  // renderRedirect() {
  //   if (this.state.Redirect) {
  //     return <Redirect to="/" />
  //   }
  // }

  componentDidMount() {
    // axios.get(`http://localhost:8080/Category/${"Action"}`)
    axios
      .get(`http://localhost:8080/Category/${this.props.match.params.title}`)
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
        <div>
          <a href={`/movie/${movie.title}`}>
            <img className="poster" src={movie.poster}></img>
          </a>
        </div>
      );
    });

    return (
      <div>
        {/* {this.renderRedirect} */}
        <h3 className="homeheader">The Chosen Category is {this.props.match.params.title}</h3>
        {list}
        
          <Link to="/">
          <button onClick={this.deleteCategory} className="deleteCategory">
            Delete This Category
          </button>
          </Link>

        <Link to="/">
          <button className="backtoHome">Back To Home</button>
        </Link>

        <Link to={`/Category/update/${this.props.match.params.title}`}>
          <button className="updatecat">Update this Category </button>
        </Link>
      </div>
    );
  }
}
