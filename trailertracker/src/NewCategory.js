
import React, { Component } from 'react';
import axios from 'axios';
import movieList from './movieData';

export default class NewCategory extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            movieList: movieList,
            originalMovieList: movieList
        };
        this.findMovie = this.findMovie.bind(this);
    }
    handleChange(evt) {
        axios.post(
            'https://localhost:8080/category',
            { title: 'HAHAHA' },
        { headers: { 'Content-Type': 'application/json'} }
        )
            .then(res => {
                console.log(res);
            })
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
            <label>Category <input type="text" placeholder="type category name" /> </label>
                    <button onSubmit={this.handleChange} type="submit">Submit</button>
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
