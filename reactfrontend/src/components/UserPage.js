import React, {Component} from 'react';
import {Link} from "react-router-dom";

class UserPage extends Component {
    render() {
        return (
            <div className="col-md-4 m-auto">
                <h3>Hello, {sessionStorage.getItem('')}!</h3>
                <p>Click <Link to="/">here</Link> to logout</p>
            </div>
        );
    }
}

export default UserPage;