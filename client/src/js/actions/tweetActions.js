import axios from 'axios';
import actionTypes from '../constants/index';

const ROOT_URL = 'http://localhost:3001';

// eslint-disable-next-line import/prefer-default-export
export const postTweet = payload => {
  return dispatch => {
    console.log(payload);
    return axios.post(`${ROOT_URL}/tweet/post`, payload).then(response => {
      console.log('Status Code : ', response.status);
      if (response.status === 200) {
        dispatch({
          type: actionTypes.POST_TWEET,
          payload: response.data,
        });
      }
    });
  };
};
