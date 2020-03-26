// index.js

import { ADD_PROJECT, DELETE_PROJECT, FETCH_PROJECT, ADD_USER } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/projects';
const apiUserUrl = 'http://localhost:5000/users';

export const createProject = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, body})
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
      title: data.title,
      body: data.body
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
export const createUser = ({ name, email, password, date }) => {
  return (dispatch) => {
    return axios.post(`${apiUserUrl}/add`, {name, email, password, date})
      .then(response => {
        dispatch(createProjectSuccess(response.data))
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
      email: data.email,
      password: data.password,
      date: data.date
    }
  }
};
