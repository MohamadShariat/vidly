import React, { Component } from "react";

export class LoginForm extends Component {
  username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              ref={this.username}
              id="username"
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" className="form-control"></input>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
