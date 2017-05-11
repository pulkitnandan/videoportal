import axios from 'axios';
import { SET_CURRENT_USER } from './types';
import md5 from '../utils/md5'


export function setCurrentUser({user, sessionId}) {
  return {
    type: SET_CURRENT_USER,
    user,
    sessionId
  };
}

export function logout() {
  return dispatch => {
    document.cookie = '';
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('http://localhost:5000/user/auth', {username:data.username, password:md5(data.password)}).then(res => {
        console.log(res);
      if(res.data.status != 'error'){
          const sessionId = res.data.sessionId;
          document.cookie = 'sessionId=' + sessionId + '; ';
          document.cookie = 'user=' + res.data.username + '; ';
          dispatch(setCurrentUser({user: res.data.username, sessionId: sessionId}));
      } else {
          throw {response: {data : {error:res.data.error}}}
      }
    });
  }
}
