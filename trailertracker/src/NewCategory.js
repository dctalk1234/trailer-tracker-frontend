import React, { Component } from 'react';

export default class NewCategory extends Component {
    render() {
        return (
            <div>
                <form>
            <label>Category <input type="text" placeholder="type category name" /> </label>
                <label>Movies <input type="text" placeholder="type movie title" /> </label>
                </form>
            </div>
        )
    }
}