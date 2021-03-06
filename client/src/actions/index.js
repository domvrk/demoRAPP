// index.js

import { ADD_PROJECT, DELETE_PROJECT, FETCH_PROJECT, ADD_USER, DELETE_USER, FETCH_USER } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/projects';
const apiUserUrl = 'http://localhost:5000/users';

export const createProject = ({ name, owner, status, description, file }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, { name, owner, status, description, file })
      .then(response => {
        dispatch(createProjectSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createProjectSuccess =  (data) => {
  return {
    type: ADD_PROJECT,
    payload: {
      _id: data._id,
      name: data.name,
      owner: data.owner,
      status: data.status,
      description: data.description,
      file: data.file
    }
  }
};

export const deleteProjectSuccess = id => {
  return {
    type: DELETE_PROJECT,
    payload: {
      id
    }
  }
}

export const deleteProject = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteProjectSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchProjects = (projects) => {
  return {
    type: FETCH_PROJECT,
    projects
  }
};

export const fetchAllProjects = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchProjects(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};




///User stuffs
export const createUser = ({ name, lastname, email, password, password2, date }) => {
  return (dispatch) => {
    return axios.post(`${apiUserUrl}/add`, {name, lastname, email, password, password2, date})
      .then(response => {
        dispatch(createUserSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createUserSuccess =  (data) => {
  return {
    type: ADD_USER,
    payload: {
      _id: data._id,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      password2: data.password2,
      date: data.date
    }
  }
};

export const deleteUserSuccess = id => {
  return {
    type: DELETE_USER,
    payload: {
      id
    }
  }
}

export const deleteUser = id => {
  return (dispatch) => {
    return axios.get(`${apiUserUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteUserSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchUsers = (users) => {
  return {
    type: FETCH_USER,
    users
  }
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return axios.get(apiUserUrl)
      .then(response => {
        dispatch(fetchUsers(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
