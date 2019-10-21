import React, { Component } from 'react';
import movieList from './movieData';

export default class Movie extends Component {
    render() {
        let movie = movieList.map(movieTitle => {
            return (
                <div key={movie.title}>
                    <h3>{movie.title}</h3>
                </div>
            );
        });
        return <div>
            <h2>Checkout these movies!</h2>
            {movie}
        </div>
    }
}