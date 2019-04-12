import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, putUser} from "../actions/ReactAppActions";
import PropTypes from 'prop-types';

class EditPage extends Component {

    constructor() {
        super();
        this.state = {
            user: {
                id: '',
                login: '',
                password: '',
                confirmPassword: '',
                firstName: '',
                lastName: '',
                email: '',
                birthday: '',
                salary: '',
                role: ''
            },
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeRoleAdd = this.onChangeRoleAdd.bind(this);

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

        componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        const {
            id,
            login,
            password,
            confirmPassword,
            email,
            firstName,
            lastName,
            birthday,
            salary,
            role
        } = nextProps.user;
        this.setState({
            id,
            login,
            password,
            confirmPassword,
            email,
            firstName,
            lastName,
            birthday,
            salary,
            role
        });
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        console.log(this.state.user);
        e.preventDefault();
        const updatedUser = {
            id: this.state.id,
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
        this.props.putUser(updatedUser, updatedUser.id, this.props.history)
    }

    componentDidMount() {
        const {user_id} = this.props.match.params;
        this.props.getUser(user_id);
        console.log(user_id);
    };

    render() {
        console.log(this.props.user);
        return (
            <div className="col-md-4 m-auto">
                <h2 className="text-center">Update User</h2>
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
                               value={this.state.login}
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password"
                               placeholder="Enter password"
                               onChange={this.onChange}
                               className="form-control"
                               pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                               name="password"
                               id="password"
                               value={this.state.password}
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="password">Password again:</label>
                        <input type="password"
                               placeholder="Enter password"
                               onChange={this.onChange}
                               className="form-control"
                               name="passwordAgain"
                               id="passwordAgain"
                               value={this.state.password}
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="text">First name:</label>
                        <input type="text"
                               placeholder="Enter first name"
                               onChange={this.onChange}
                               className="form-control"
                               name="firstName"
                               id="firstName"
                               value={this.state.firstName}
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
                               value={this.state.lastName}
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="text">Email:</label>
                        <input type="text"
                               placeholder="Enter email"
                               onChange={this.onChange}
                               className="form-control"
                               pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                               id="email"
                               name="email"
                               value={this.state.email}
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
                               value={this.state.birthday}
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
                               value={this.state.salary}
                               required/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="login">Role:</label>
                        <select className="form-control form-control-lg"
                                onChange={this.onChangeRoleAdd}
                                // value={this.state.role}
                        >
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>

                    <button className="btn btn-success">Update User</button>
                </form>
                <Link role="button" className="btn btn-primary" to={"/admin"}>Cancel</Link>
            </div>
        );
    }
}

EditPage.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    putUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user.user,
    errors: state.errors,
});

export default connect(mapStateToProps,{getUser, putUser})(EditPage);