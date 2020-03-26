import React, { Component } from "react";
//import { Link } from "react-router-dom";

//import axios from 'axios';

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",

    };
  }
handleInputChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

handleSubmit = e => {
  e.preventDefault();
  if (this.state.name.trim() && this.state.password.trim()) {
    this.props.onAddUser(this.state);
    this.handleReset();
  }
};

handleReset = () => {
  this.setState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
};



render() {

return (
  <form onSubmit= {this.handleSubmit}>
    <div className="form-group">
        <input
        type="text"
        placeholder="Name"
        className="form-control"
        name="name"
        onChange={ this.handleInputChange }
        value={ this.state.name }
      />
    </div>
    <div className="form-group">
        <input
        type="text"
        placeholder="Email"
        className="form-control"
        name="email"
        onChange={ this.handleInputChange }
        value={ this.state.email }
      />
    </div>
    <div className="form-group">
        <input
        type="text"
        placeholder="Password"
        className="form-control"
        name="password"
        onChange={ this.handleInputChange }
        value={ this.state.password }
      />
    </div>
    <div className="form-group">
        <input
        type="text"
        placeholder="Password2"
        className="form-control"
        name="password2"
        onChange={ this.handleInputChange }
        value={ this.state.password2 }
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary">Add User</button>
      <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
        Reset
      </button>
    </div>
  </form>
    );
  }
}
export default AddUser;
