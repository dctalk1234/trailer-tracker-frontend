import React, { Component } from 'react';
import axios from 'axios';
import './UpdateCategory.css';

export default class UpdateCategory extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            updatedTitle: '',
            search: '',
            movieList: [],
            originalMovieList: [],
            searchedMovieList: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findMovie = this.findMovie.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.searchResults = this.searchResults.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.addSearchedMovie = this.addSearchedMovie.bind(this);
    }
    componentDidMount() {
        axios.get(`https://trailerstracker.herokuapp.com/Category/${this.props.match.params.title}`)
            .then(res => {
                // console.log(...res.data.movies);
                this.setState({
                    movies: [...res.data.movies]
                });
            })
            .then(() => {
                axios.get(`https://trailerstracker.herokuapp.com/Movie`)
                    .then(res => {
                        this.setState({
                            originalMovieList: [...res.data]
                        })
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    handleSubmit(evt) {
        evt.preventDefault();

        let updatedTitle = this.state.updatedTitle;
        axios.put(
            `https://trailerstracker.herokuapp.com/Category//${this.props.match.params.title}`,
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
        if (evt.target.value !== '') {
            this.setState({updatedTitle: evt.target.value});
            console.log(this.state.updatedTitle);
        }
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
        console.log(evt.target.innerText);
        evt.target.style.color = '#F25A38';
        let movieSelected = evt.target.innerText;
        let movieObject = this.state.movieList.find((movie) => {
            return movie.title === movieSelected;
        });
        this.setState({
            movies: [...this.state.movies, movieObject]
        });
        console.log(movieObject);
    }
    searchResults(evt) {
        evt.preventDefault();
        let foundMovie = this.state.foundTitle;
        axios.get(`https://trailerstracker.herokuapp.com/Movie/search/${foundMovie}`,
            { title: foundMovie},
            { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                this.setState({searchedMovieList: res.data} );
                console.log(res.data);
            });
    }
    searchTitle(evt) {
        console.log(evt.target.value);
        evt.preventDefault();
        this.setState({ foundTitle: evt.target.value });
        console.log(this.state.foundTitle);
    }
    addSearchedMovie(evt) {
        evt.preventDefault(evt);
        console.log(evt.target.innerText);
        evt.target.style.color = 'green';
        let newMovieTitle = this.state.searchedMovieList.Title;
        let newMovieObject = this.state.searchedMovieList;
        axios.post(`https://trailerstracker.herokuapp.com/Movie/new`,
            { title: newMovieTitle},
            { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                this.setState({searchedMovieList: newMovieObject} );
                console.log(newMovieObject);
            });
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
                <section className="currentMovies">
                <h2 className="homeheader ">{this.props.match.params.title}</h2>
                <h3>Current Movie Titles in {this.props.match.params.title}</h3>
                {movieTitles}

                <form className="currentMovies">
                    <label>Change Category Name <input onChange={this.handleChange} type="text" placeholder={this.props.match.params.title} value={this.state.updatedTitle} /> </label>
                    <button onClick={this.handleSubmit} type="submit">Submit</button>
                </form>

                </section>
                <form className="movieDBSearch">
                    <h4>Search through the movie selections and then click on the title you want to add.</h4>
                    <label>Movie Selections <input onChange={this.findMovie} type="text" placeholder="type movie title" value={this.state.search} /> </label>

                    <div>
                        <ul >

                            { this.state.movieList.map((movieTitle) => {

                                return <li  onClick={this.addMovie} className="catmovie" key={movieTitle.title}>{movieTitle.title}</li>;
                            })}

                        </ul>
                    </div>
                </form>
                <form className="OMBDSearch">
                    <h4>Didn't find the movie you were looking for? </h4>
                    <h4>Type the complete title into the field below to search a larger database.</h4>
                    <label> Search Movies <input onChange={this.searchTitle} type="text" placeholder="type movie title" /></label>
                    <button onClick={this.searchResults} type="submit">Submit</button>
                    <div>
                        <ul >
                                 <li  onClick={this.addSearchedMovie} className="catmovie" >{this.state.searchedMovieList.Title} {this.state.searchedMovieList.Year}</li>
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}