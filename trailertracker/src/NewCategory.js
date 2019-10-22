import React, { Component } from "react";
import axios from "axios";
import catList from "./categoryData.json";
import movieList from "./movieData";

export default class NewCategory extends Component {
	constructor() {
		super();
		this.state = {
			category: ""
		};
	}
	handleChange(evt) {
        console.log(evt);
        evt.preventDefault();
        
        axios.post("http://localhost:8080/Category/", 
        { title: "HAHAHA" }, 
        { headers: { "Content-Type": "application/json" } })
        .then(res => {
			console.log(res);
		}).catch(err => {
            console.error(err);
        });
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
					<label>
						Category <input type="text" placeholder="type category name" />{" "}
					</label>
					<button onClick={this.handleChange} type="submit">
						Submit
					</button>
				</form>
				<label>
					Movies <input type="text" placeholder="type movie title" value={this.state.search} />{" "}
				</label>

				<div>
					{/*<ul >*/}
					{/*    {filteredMovie.map((movie) => {*/}
					{/*     return <NewCategory movie={movie.title}/>*/}
					{/*    })}*/}
					{/*</ul>*/}
				</div>
			</div>
		);
	}
}
