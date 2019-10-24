import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class OneCategory extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			redirect: false
		};
		this.deleteCategory = this.deleteCategory.bind(this);
		this.setRedirect = this.setRedirect.bind(this);
		this.renderRedirect = this.renderRedirect.bind(this);
	}

	deleteCategory() {
		axios
			.delete(`http://localhost:8080/Category/${this.props.match.params.title}`)
			.then(res => {
				this.setRedirect();
				// this.setState({ movies: res.data.movies });
			})
			.catch(error => {
				console.log(error);
			});
	}

	setRedirect() {
		this.setState({ redirect: true })
	}

	renderRedirect() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}
	}

	componentDidMount() {
		axios
			.get(`http://localhost:8080/Category/${this.props.match.params.title}`)
			.then(res => {
				console.log(res.data.movies);

				this.setState({ movies: res.data.movies });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		let list = this.state.movies.map(movie => {
			return (
				<div>
					<a href={`/movie/${movie.title}`}>
						<img className="poster" src={movie.poster}></img>
					</a>
				</div>
			);
		});
		console.log(this.state.redirect);

		return (
			<div>
				{this.renderRedirect()}
				<h3 className="homeheader">The Chosen Category is {this.props.match.params.title}</h3>
				{list}

				<button onClick={this.deleteCategory} className="deleteCategory">
					Delete This Category
				</button>

				<Link to="/">
					<button className="backtoHome">Back To Home</button>
				</Link>

				<Link to={`/Category/update/${this.props.match.params.title}`}>
					<button className="updatecat">Update this Category </button>
				</Link>
			</div>
		);
	}
}
