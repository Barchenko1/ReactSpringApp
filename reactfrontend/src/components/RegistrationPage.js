import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {registrationUser} from "../actions/ReactAppActions";
import {Link} from "react-router-dom";

class RegistrationPage extends Component {

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
                salary: ''
            },
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
            role: {id: 2, name: "User"}
        };

        this.props.registrationUser(newUser, this.props.history)
    }

    render() {
        console.log(this.state);
        return (
            <div className="col-md-4 m-auto">
                <h2 className="text-center">Registration User</h2>
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

                    <button className="btn btn-success">Registration</button>
                </form>
                <Link role="button" className="btn btn-primary" to={"/"}>Cancel</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors
});

RegistrationPage.propsTypes = {
    Registration: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    registrationUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {registrationUser})(RegistrationPage);