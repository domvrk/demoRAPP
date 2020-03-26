import React, { Component } from "react";
//import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
handleInputChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
  };
render() {

return (
  <form>
    <div className="form-group">
        <input
        type="text"
        id="email"
        placeholder="Email"
        className="form-control"
        name="email"
        onChange={ this.handleInputChange }
        value={ this.state.email }
      />
    </div>
    <div className="form-group">
        <input
        type="password"
        id="password"
        placeholder="Password"
        className="form-control"
        name="password"
        onChange={ this.handleInputChange }
        value={ this.state.password }
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary">Login</button>
    </div>
  </form>
    );
  }
}
export default Login;
