import React, { Component } from 'react';
import CreateUser from '../../containers/CreateUser';
import UserList from '../../containers/UserList'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component {
  render() {
    return (
      <div >
        <div >
          <div >
            <CreateUser />
          </div>
          <UserList />
        </div>
      </div>
    );
  }
}

export default Signup;
