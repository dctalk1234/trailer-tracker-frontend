import React, { Component } from 'react';
import movieList from './movieData';

export default class Movie extends Component {
    render() {
        let movie = movieList.find(movieTitle => movieTitle.title === this.props.match.params.title);
            return (
                <div >
                    <h3>{movie.title}</h3>
                    <iframe
                        width="627"
                        height="470"
                        src={movie.trailer}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>


                </div>
            );

        return <div>
            <h2>Checkout these movies!</h2>

        </div>
    }
}