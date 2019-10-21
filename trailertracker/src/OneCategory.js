import React, { Component } from "react";
import Link from "react-router-dom";


class OneCategory extends Component {
    render() {
        return(
            <div>
                <h3>My Category!</h3>
                <Link to="/CategoryList">Back To Home</Link>
            </div>
        )
    }
}


export default OneCategory;