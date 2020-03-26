import React, { Component } from 'react';
import CreateUser from '../../containers/CreateUser';


import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreateUser />
          </div>

        </div>
      </div>
    );
  }
}

export default Signup;
