import axios from 'axios';
import cookie from 'js-cookie';
import actionTypes from '../constants/index';
import { ROOT_URL } from '../../constant/constant';
import { history } from '../helper/history';

const register = payload => {
  return dispatch => {
    console.log(`${ROOT_URL}/user/register`);
    return axios
      .post(`${ROOT_URL}/user/register`, payload)
      .then(response => {
        console.log('Status Code : ', response.status);
        console.log(response.data);
        if (response.status === 200) {
          dispatch({
            type: actionTypes.USER_REGISTER,
            payload: response.data,
          });
          cookie.set('token', response.data.token);
          history.push('/home');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
const login = payload => {
  return dispatch => {
    console.log(`${ROOT_URL}/user/login`);
    return axios
      .post(`${ROOT_URL}/user/login`, payload)
      .then(response => {
        console.log('Status Code : ', response.status);
        console.log(response.data);
        if (response.status === 200 && response.data.active) {
          dispatch({
            type: actionTypes.USER_LOGIN,
            payload: response.data,
          });
          cookie.set('token', response.data.token);
          history.push('/home');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getUserProfile = payload => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/user/details/${payload.userId}`).then(response => {
      console.log('Status Code : ', response.status);
      console.log(response.data);
      if (response.status === 200) {
        dispatch({
          type: actionTypes.GET_USER_PROFILE,
          payload: response.data,
        });
      }
      return Promise.resolve();
    });
  };
};

export const getLikedTweets = payload => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/user/like/${payload.userId}`).then(response => {
      console.log('Status Code : ', response.status);
      console.log(response.data);
      if (response.status === 200) {
        dispatch({
          type: actionTypes.GET_LIKED_TWEETS,
          payload: response.data,
        });
      }
      return Promise.resolve();
    });
  };
};

export const getLikedTweets = payload => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/user/like/${payload.userId}`).then(response => {
      console.log('Status Code : ', response.status);
      console.log(response.data);
      if (response.status === 200) {
        dispatch({
          type: actionTypes.GET_LIKED_TWEETS,
          payload: response.data,
        });
      }
    });
  };
};

export const userActions = { register, login };
