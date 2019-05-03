import {
    APP_IS_READY,
    APP_IS_NOT_READY,
    SIGN_IN,
    SIGN_OUT,
    SIGN_ON
  } from '../constants';
import Axios from 'axios';
  
  export const AppIsReady = payload => ({
    type: APP_IS_READY,
    payload
  });
  
  export const AppIsNotReady = payload => ({
    type: APP_IS_NOT_READY,
    payload
  });
  
  export const actionSignIn = payload => ({
    type: SIGN_IN,
    payload
  });
  
  export const actionSignOut = payload => ({
    type: SIGN_OUT,
    payload
  });
  
  export const actionSignOn = payload => ({
    type: SIGN_ON,
    payload
  });
  
  export const getStock = (username) => async (dispatch) => {
    Axios({
      method: 'POST',
      url: 'http://192.168.1.120:8000/api/getUserStocks',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        _username:username
      }
    })
    .then(res => {
      console.log("STOCK:",res);
      dispatch({
        type: 'GETSTOCK',
        payload:res.data
      })
    })
    
  };