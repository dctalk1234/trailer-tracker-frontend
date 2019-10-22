import React, { Component } from "react";
import axios from "axios";
import movieList from "./movieData";

export default class NewCategory extends Component {
	constructor() {
		super();
		this.state = {
			search: "",
			movieList: movieList,
			originalMovieList: movieList,
			NewCategoryValue: ""
		};
		this.findMovie = this.findMovie.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNewCategoryChange = this.handleNewCategoryChange.bind(this);
	}
	handleSubmit(evt) {
		evt.preventDefault();
		let newCategoryTitle = this.state.NewCategoryValue;
		axios.post("http://localhost:8080/category", { title: newCategoryTitle }, { headers: { "Content-Type": "application/json" } }).then(res => {
			console.log(res);
		});
	}

	handleNewCategoryChange(evt) {
		console.log(evt.target.value);
		this.setState({ NewCategoryValue: evt.target.value });
	}

	findMovie(evt) {
		this.setState({ search: evt.target.value }); //console.log(evt.target.value);
		let filteredMovie = this.state.originalMovieList.filter(movieTitle => movieTitle.title.toLowerCase().includes(evt.target.value.toLowerCase()));
		this.setState({ movieList: filteredMovie });
		console.log(filteredMovie);
	}
	render() {
		console.log(this.state.search);
		return (
			<div>
				                
				<form>
					                     
					<input onChange={this.handleNewCategoryChange} type="text" placeholder="type category name" value={this.state.NewCategoryValue} />
					                    
					<input onClick={this.handleSubmit} type="submit" />
					                                 
				</form>
				                
				<form>
					                    
					<label>
						                        Movies 
						<input onChange={this.findMovie} type="text" placeholder="type movie title" value={this.state.search} />
						{" "}
						                    
					</label>
					                    
					<div>
						                        
						<ul>
							                            
							{this.state.movieList.map(movieTitle => {
								return <li key={movieTitle.title}>{movieTitle.title}</li>;
							})}
							                        
						</ul>
						                    
					</div>
					                
				</form>
				            
			</div>
		);
	}
}
