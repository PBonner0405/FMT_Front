import cookieWrite from '../browser/cookieWrite';
import cookieRemoveAll from '../browser/cookieRemoveAll';
import { SIGN_IN, SIGN_OUT } from '../constants';


export default (state = [], action) => {
  switch (action.type) {

    case SIGN_IN: {
      const { payload } = action;
      const { username } = payload;
      cookieWrite('isSignedIn', true);
      cookieWrite('username', username);

      return {
        ...state,
        isSignedIn: true,
        username
      };
    }

    // case SIGN_OUT: {
    //   cookieRemoveAll();
    //   return initialState;
    // }

    default:
      return state;
  }
}
