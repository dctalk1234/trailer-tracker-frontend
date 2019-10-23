import React, {Component} from "react";
import {Link} from "react-router-dom";
import catList from "./categoryData.json";
import axios from "axios";

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            listOfCategories: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:8080/Category/')
            .then(res => {
                console.log(res.data);
                this.setState({listOfCategories: res.data});
            })
            .catch(error => {
                console.log(error);
            })
    }ß

    render() {
        console.log('hello');
        let movieCats = this.state.listOfCategories.map(item => {
            return (
                <div key={item.title}>
                    <ul>
                        <a href={`/category/${item.title}`}>{item.title}</a>
                    </ul>
                </div>
            );
        });
        return <div>
            <h2>Browse Our Massive List Of Box Office Classics!</h2>
            {movieCats}
            <Link to="/update">Update Categories</Link>
        </div>;
    }
}

export default CategoryList;
