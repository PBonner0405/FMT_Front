import {
    APP_IS_READY,
    APP_IS_NOT_READY,
    SIGN_IN,
    SIGN_OUT,
    SIGN_ON
  } from '../constants';
  
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
  