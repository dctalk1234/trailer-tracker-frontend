import React, { Component } from 'react';
import axios from 'axios';

import "../NewCategory/NewCategory.css";

import { Redirect } from "react-router-dom";


export default class NewCategory extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }
    setRedirect() {
        this.setState({ redirect: true });
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/trailer-tracker-frontend" />;
        }
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let newTitle = this.state.title;
        axios.post(
            `https://trailerstracker.herokuapp.com/Category/`,
            { title: newTitle },
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(res => {
                console.log(res);
                this.setRedirect();
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
                {this.renderRedirect()}
                <form>
                    <label>Category <input onChange={this.handleChange} type="text" placeholder="type category name" value={this.state.title} /> </label>
                    <button onClick={this.handleSubmit} type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

