import React, { Component } from 'react';
//import movieList from './movieData';
import axios from "axios";


export default class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movieTitle: "",
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/Movie/${this.props.match.params.title}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    title: res.data.title,
                    trailer: res.data.trailer
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        let movie = this.state;
        console.log(this.state.title);
            return (
                <div >
                    <h3>{movie.title}</h3>
                    <iframe
                        title={movie.title}
                        width="627"
                        height="470"
                        src={movie.trailer}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>


                </div>
            );

    }
}