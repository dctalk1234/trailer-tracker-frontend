import React, { Component } from 'react';
import catList from "./categoryData.json";
import movieList from './movieData';

export default class NewCategory extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    render() {
        // let filteredMovie = catList[0].movies.filter(
        //     (movieTitle) => {
        //         return movieTitle.title.indexOf(this.state.search) !== -1;
        //     }
        // );
        return (
            <div>
                <form>
            <label>Category <input type="text" placeholder="type category name" /> </label>
                    <button type="submit">Submit</button>
                </form>
                <label>Movies <input type="text" placeholder="type movie title" value={this.state.search}/> </label>

                <div>
                    {/*<ul >*/}
                    {/*    {filteredMovie.map((movie) => {*/}
                    {/*     return <NewCategory movie={movie.title}/>*/}
                    {/*    })}*/}
                    {/*</ul>*/}
                </div>
            </div>
        )
    }
}