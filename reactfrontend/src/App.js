import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegistrationPage from "./components/RegistrationPage";
import EditPage from "./components/EditPage";
import AddPage from "./components/AddPage";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import store from "./store";
import {Provider} from "react-redux";

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LoginPage} />
                        <Route exact path="/update/:user_id" component={EditPage} />
                        <Route exact path="/add" component={AddPage} />
                        <Route exact path="/admin" component={AdminPage} />
                        <Route exact path="/user" component={UserPage} />
                        <Route exact path="/registration" component={RegistrationPage} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
