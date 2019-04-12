import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { getAllUsers, deleteUser} from "../actions/ReactAppActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class UserList extends Component {

    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    onDeleteClick(user_id){
        this.props.deleteUser(user_id)
    }

    render() {
        console.log(this.props.users);
        const { users } = this.props.users;
        return (
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th>Login</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td>{user.login}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.birthday}</td>
                            <td>{user.salary}</td>
                            <td>{user.role.name}</td>
                            <td>
                                <Link role="button" className="btn btn-primary" to={`/update/${user.id}`}>Edit</Link>
                                <button type="submit" onClick={this.onDeleteClick.bind(this, user.id)}
                                        className="btn btn-primary">Delete
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user
});

UserList.propTypes = {
    getAllUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {getAllUsers, deleteUser})(UserList);