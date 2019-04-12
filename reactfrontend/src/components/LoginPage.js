import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LoginPage extends Component{


    render() {

        // if (this.userService.loggedIn()) {
        //     return <Redirect to="/home"/>
        // }

        return (
            <div className="loginPage">
                <div className="container">

                    {/*{this.state.incorrectData ?*/}
                        {/*<div className="alert alert-danger" role="alert">Login or password incorrect</div> : null}*/}
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <form className="form" onSubmit={this.OnSubmitLogin}>
                                <div className="form-group">
                                    <label htmlFor="login">Login:</label>
                                    <input type="text" placeholder="Login" name="login" className="form-control" id="login"
                                           onChange={this.OnChangeLoginLogIn}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" placeholder="Password" name="password" className="form-control"
                                           onChange={this.onChangePasswordLogIn}
                                           id="password" required/>
                                </div>
                                <button type="submit" className="btn btn-success">Log in</button>
                            </form>
                            {/*<button className="btn btn-primary mt-2">Registration</button>*/}
                            <Link role="button" className="btn btn-primary" to={"/registration"}>Registration</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;