import React, { Component } from 'react';
import movieList from './movieData';

export default class Movie extends Component {
    render() {
        let movie = movieList.find(movieTitle => movieTitle.title === this.props.match.params.title);
            return (
                <div >
                    <h3>{movie.title}</h3>
                </div>
            );
        
        return <div>
            <h2>Checkout these movies!</h2>

        </div>
    }
}