import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import './Style.css';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '15px',
  padding: '.6rem 1rem',
  maxWidth: 'auto',
  borderRadius: '7px',
};

class Profile extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div >
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}, you are logged in.
            </h4>

            <h3> Personal Information </h3>
            <div style={ styles }>
            <h4> Name: {user.name}  </h4>
            <h4> Email: {user.email} </h4>
            </div>

            <h3> Your Projects </h3>
            <div style={ styles }>
            <h4>No projects yet.</h4>
            </div>

            <button

              onClick={this.onLogoutClick}
              className="btn btn-primary mb-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
