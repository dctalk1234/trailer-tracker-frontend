import React, { Component } from 'react';
import axios from 'axios';
import movieList from '../Movie/movieData';

export default class UpdateCategory extends Component {
    constructor() {
        super();
        this.state = {
            updatedTitle: '',
            search: '',
            movieList: movieList,
            originalMovieList: movieList
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findMovie = this.findMovie.bind(this);
    }
    handleSubmit(evt) {
        let updatedTitle = this.state.updatedTitle;
        axios.put(
            `http://localhost:8080/Category/${this.props.match.params.title}`,
            { title: updatedTitle },
        { headers: { 'Content-Type': 'application/json'} }
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
             this.setState({movieList: filteredMovie});
            console.log(filteredMovie);

    }
    render() {
        console.log(this.state.search);
        return (
            <div>
                <form>
            <label>Category <input onChange={this.handleChange} type="text" placeholder="type category name" value={this.state.updatedTitle} /> </label>
                    <button onClick={this.handleSubmit} type="submit">Submit</button>
                </form>
                <form>
                <label>Movies <input onChange={this.findMovie} type="text" placeholder="type movie title" value={this.state.search}/> </label>

                <div>
                    <ul >

                        {this.state.movieList.map((movieTitle) => {

                            return <li key={movieTitle.title}>{movieTitle.title}</li>;
                        })}

                    </ul>
                </div>
                </form>
            </div>
        )
    }
}
