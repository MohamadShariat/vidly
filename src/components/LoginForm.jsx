import React, { Component } from "react";

export class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              className="form-control"
            ></input>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
