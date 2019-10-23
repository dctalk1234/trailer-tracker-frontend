import React, { Component } from 'react';
import axios from 'axios';

export default class NewCategory extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let newTitle = this.state.title;
        axios.post(
            'http://localhost:8080/category',
            { title: newTitle },
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(res => {
                console.log(res);
            })

    }
    handleChange(evt) {
        evt.preventDefault();
        this.setState({ title: evt.target.value });
        console.log(this.state.title);
    }
    render() {

        return (
            <div>
                <form>
                    <label>Category <input onChange={this.handleChange} type="text" placeholder="type category name" value={this.state.title} /> </label>
                    <button onClick={this.handleSubmit} type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

