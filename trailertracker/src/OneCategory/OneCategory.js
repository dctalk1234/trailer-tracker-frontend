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
    axios.get(`http://localhost:8080/Category/${"Action"}`)
      .then(res => {
        console.log(res.data);
        let movieCats = this.state.listOfCategories.map(item => {
          console.log(item)
          this.setState({ movies: res.data.title });
        })
      })
      .catch(error => {
        console.log(error);
      })

  }

  render() {
    return (
      <h1>hi from oneCat</h1>

    )
    // let chosenCategory = catList.find(
    //   element => element.title === this.props.match.params.title
    // );


    // let moviePosters = [];
    // for (let i = 0; i < chosenCategory.movies.length; i++) {
    //   moviePosters.push(chosenCategory.movies[i].poster);
    // }
    // console.log(moviePosters);
    // console.log(chosenCategory);

    // let poster = moviePosters.map(poster => {
    //   console.log(poster);
    //   return (
    //     <a href={`/movie`}>
    //       {/* Change this */}
    //       <img className="poster" key={poster} src={poster} alt="poster" />
    //     </a>
    //   );
    // });

    // let movieYears = [];
    // for (let i = 0; i < chosenCategory.movies.length; i++) {
    //   movieYears.push(chosenCategory.movies[i].releaseYear);
    // }

    // console.log(chosenCategory)

    // return (
    //   <div>
    //     <form id="viewForm">
    //       <h3 className="homeheader">The Chosen Category is {chosenCategory.title}</h3>
    //       <div>
    //         {poster}
    //         <br></br>
    //       </div>
    //       <Link to="/"><button className="backtoHome">Back To Home</button></Link>




    //       <Link to={`/Category/update/${chosenCategory.title}`}><button className="updatecat">
    //         Update this Category  </button></Link>
    //     </form>
    //     <main>
    //       <Route path="/category/update/:title" exact={true} render={routerProps => <UpdateCategory match={routerProps.match} />} />
    //     </main>
    //   </div>
    // );
  }
}
