import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserList from "./UserList";

class AdminPage extends Component {

    render() {
        return (
            <div>
                <Link to="/add" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <div>${sessionStorage.getItem('login')}(<Link to="/">Logout</Link>)</div>
                <UserList/>

            </div>
        );
    }
}

export default AdminPage;