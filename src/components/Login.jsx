import React from 'react';
import * as api from '../utils/api';

class Login extends React.Component {

  state = {
    username: null,
    password: null,
    userExists: null,
    err: null
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username } = this.state;
    api.getUserByUsername(username)
      .then(user => {
        this.props.loginUser(username);
      })
      .catch(err => {
        this.setState({ 
          userExists: false,
          err: {
            status: 404,
            msg: 'user not found'
          }
         });
      })
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div className="login-container">
        <h3>Login</h3>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">
            <input id="username" type="text" onChange={ this.handleChange } placeholder="username"/>
          </label>
          <label htmlFor="password">
            <input id="password" onChange={ this.handleChange } placeholder="password"/>
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
};

export default Login;