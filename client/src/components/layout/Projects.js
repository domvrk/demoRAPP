import React, { Component } from 'react';
import CreateProject from '../../containers/CreateProject';
import ProjectList from '../../containers/ProjectList';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreateProject />
          </div>
          <div className="col-md-6">
            <ProjectList />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
