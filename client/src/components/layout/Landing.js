import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div >

        <Link to="/signup">
          Sign up
        </Link>
        <br />

        <Link to="/login">
          Log In
        </Link>

        <br />

        <Link to="/projects">
        Add Project
        </Link>


      </div>




    );
  }
}
export default Landing;
