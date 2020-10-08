import React, { Component } from 'react';
import fire from '../../config/Fire';
import "./Login.css";
import myImg from "../../images/factory.jpg";


class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log(error);
            });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="col-md-4">
                <form className="loginForm">
                    <h2>Productivity</h2>
                    <div>
                        <img src={myImg}></img>
                    </div>
                    <div className="form-group">
                        <select className="form-control" id="class">
                            <option value="plantmanager">Plant Manager</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="InputEmail">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="InputPassword">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="InputPassword" placeholder="Password" />
                    </div>
                    <div className="loginButton">
                        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                        <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;