import React, { Component } from 'react';
import axios from 'axios';
import movieList from '../Movie/movieData';

export default class UpdateCategory extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            updatedTitle: '',
            search: '',
            movieList: movieList,
            originalMovieList: movieList
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findMovie = this.findMovie.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/Category/${this.props.match.params.title}`)
            .then(res => {
               // console.log(...res.data.movies);
                this.setState({
                    movies: [...res.data.movies]
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    handleSubmit(evt) {
        evt.preventDefault();

        let updatedTitle = this.state.updatedTitle;
        axios.put(
            `http://localhost:8080/Category/${this.props.match.params.title}`,
            { title: updatedTitle,
                movies: this.state.movies
            },
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(res => {
                console.log(res);
            })
    }
    handleChange(evt) {
        evt.preventDefault();
        this.setState({ updatedTitle: evt.target.value });
        console.log(this.state.updatedTitle);
    }
    findMovie(evt) {
        this.setState({ search: evt.target.value });
        //console.log(evt.target.value);

        let filteredMovie = this.state.originalMovieList.filter(
            (movieTitle) => movieTitle.title.toLowerCase().includes(evt.target.value.toLowerCase()));
        this.setState({ movieList: filteredMovie });
        console.log(filteredMovie);

    }
    addMovie(evt) {
        evt.preventDefault();
        console.log(evt.target);
        let movieObject = this.state.movieList;
            // .map((movieTitle) => {movieTitle.title});
        // if (evt.target === movieObject.title) {
        //     this.state.movies.push(evt.target);
        //     console.log(this.state.movies);
        // }
        console.log(movieObject);
    }
    render() {

//console.log(this.state.movies);
        let movieTitles = this.state.movies.map(item => {
            return (
                <div key={item.title}>
                    <ul>
                        {item.title}
                    </ul>
                </div>
            );
        });
//console.log(movieTitles);
        return (
            <div>
                <h2 className="homeheader ">{this.props.match.params.title}</h2>
                <h3>Current Movie Titles in {this.props.match.params.title}</h3>
                {movieTitles}

                <form >
                    <label>Category <input onChange={this.handleChange} type="text" placeholder={this.props.match.params.title} value={this.state.updatedTitle} /> </label>
                    <button onClick={this.handleSubmit} type="submit">Submit</button>
                </form>


                <form>
                    <label>Movies <input onChange={this.findMovie} type="text" placeholder="type movie title" value={this.state.search} /> </label>

                    <div>
                        <ul >

                            { this.state.movieList.map((movieTitle) => {

                                return <li onClick={this.addMovie} className="catmovie" key={movieTitle.title}>{movieTitle.title}</li>;
                            })}

                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}
