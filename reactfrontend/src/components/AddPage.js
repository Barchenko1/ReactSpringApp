import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addUser} from "../actions/ReactAppActions";

class AddPage extends Component {

    constructor() {
        super();
        this.state = {
            user: {
                login: '',
                password: '',
                confirmPassword: '',
                email: '',
                firstName: '',
                lastName: '',
                birthday: '',
                salary: '',
                role: {id: 2, name: 'User'}
            },
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeRoleAdd = this.onChangeRoleAdd.bind(this)
    }


    componentDidMount() {
        this.setState(this.state.role = {id: 2, name: 'User'})
    }

    onChangeRoleAdd(e){
        const user = this.state.user;
        if (e.target.value === "Admin") {
            user.role = {
                id: 1,
                name: "Admin"
            }
        } else {
            user.role = {
                id: 2,
                name: "User"
            }
        }
        this.setState({role: user.role});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const  newUser = {
            login: this.state.login,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthday: this.state.birthday,
            salary: this.state.salary,
            role: this.state.role
        };

        this.props.addUser(newUser, this.props.history)
    }

    render() {
        console.log(this.state);
        return (
            <div className="col-md-4 m-auto">
                <h2 className="text-center">Create User</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input type="text"
                               placeholder="Enter login"
                               onChange={this.onChange}
                               id="login"
                               className="form-control"
                               pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                               name="login"
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">Password:</label>
                        <input type="password"
                               placeholder="Enter password"
                               onChange={this.onChange}
                               className="form-control"
                               pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                               name="password"
                               id="password"
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">Password again:</label>
                        <input type="password"
                               placeholder="Enter password"
                               onChange={this.onChange}
                               className="form-control"
                               name="passwordAgain"
                               id="passwordAgain"
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">First name:</label>
                        <input type="text"
                               placeholder="Enter first name"
                               onChange={this.onChange}
                               className="form-control"
                               name="firstName"
                               id="firstName"
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">Last name:</label>
                        <input type="text"
                               placeholder="Enter last name"
                               onChange={this.onChange}
                               className="form-control"
                               pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                               name="lastName"
                               id="lastName"
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">Email:</label>
                        <input type="text"
                               placeholder="Enter email"
                               onChange={this.onChange}
                               className="form-control"
                               pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                               id="email"
                               name="email"
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">Birthday:</label>
                        <input type="date"
                               placeholder="Enter email"
                               onChange={this.onChange}
                               className="form-control"
                               id="birthday"
                               name="birthday"
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">Salary:</label>
                        <input type="text"
                               placeholder="Enter email"
                               onChange={this.onChange}
                               className="form-control"
                               pattern="[0-9]{3,6}"
                               name="salary"
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">Role:</label>
                        <select className="form-control form-control-lg"
                            onChange={this.onChangeRoleAdd}
                            value={this.state.user.role.name}>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>

                    <button className="btn btn-success">Add User</button>
                </form>
                <Link role="button" className="btn btn-primary" to={"/admin"}>Cancel</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors
});

AddPage.propsTypes = {
    Registration: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    addUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps,{addUser})(AddPage);