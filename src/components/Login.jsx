import React from 'react';
import * as api from '../utils/api';
import './styles/Login.css';

class Login extends React.Component {

  state = {
    username: 'jessjelly',
    password: 'password',
    err: null
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
      api.getUserByUsername(username)
      .then(user => {
        if (password === "password") {
          this.props.loginUser(username);
        } else {
          this.setState({
            err: {
              msg: 'incorrect password!'
            }
          });
        }
      })
      .catch(err => {
        this.setState({ 
          err: {
            status: 404,
            msg: 'invalid username'
          }
         });
      });
    
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { err } = this.state;
    return (
      <div className="login-container">
        <h3>Login</h3>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">
            <input 
              id="username" 
              type="text" 
              onChange={ this.handleChange } 
              placeholder="username" 
              autoComplete="off"
              required
              value="jessjelly"
            />
          </label>
          <label htmlFor="password">
            <input 
              type="password" 
              id="password" 
              onChange={ this.handleChange } 
              placeholder="password"
              value="password"
            />
          </label>
          <button type="submit">Login</button>
          { err && <p>{ err.msg }</p> }
        </form>
      </div>
    );
  }
  
};

export default Login;