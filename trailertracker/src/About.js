import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return(
            <div>
                <h2>Meet the developers:</h2>
                <Link to="/nathaniel">
                <h3>Nathaniel Stack</h3></Link>
                <Link to="/shamira">
                <h3>Shamira Jones</h3></Link>
                <Link to="https://www.spiano.dev/">
                <h3>Sarah Panaligan</h3></Link>
                <Link to="/james">
                <h3>James Opara</h3></Link>
            </div>
        );
    }
}