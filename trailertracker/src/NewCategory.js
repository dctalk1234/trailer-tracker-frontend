import React, { Component } from 'react';
import axios from 'axios';
//import movieList from "./movieData";


export default class NewCategory extends Component {
    constructor() {
        super();
        // this.state = {
        //     title: ''
        // };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        console.log(evt.target.value);
        axios.post(
            'https://localhost:8080/category',
            { title: evt.target.value },
            { headers: { 'Content-Type': 'application/json'} }
        )
            .then(res => {
                console.log(res);
            })

    }
    render() {

        return (
            <div>
                <form>
                    <label>Category <input  type="text" placeholder="type category name" /> </label>
                    <button onSubmit={this.handleChange} type="submit">Submit</button>
                </form>

            </div>
        )
    }
}