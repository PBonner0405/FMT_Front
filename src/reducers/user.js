import cookieWrite from '../browser/cookieWrite';
import cookieRemoveAll from '../browser/cookieRemoveAll';
import { SIGN_IN, SIGN_OUT } from '../constants';

const initialState = {
  statusCode: 404,
  isError: false,
  error: '',
  isFetching: false,

  message: '',
  isSignedIn: false
};

export default function reducer(state = [], action) {
  switch (action.type) {

    case SIGN_IN: {
      const { payload } = action;
      
      const { email } = payload;
      console.log(email);
      console.log('Reducer Called');

      cookieWrite('isSignedIn', true);
      cookieWrite('email', email);

      return {
        ...state,
        isSignedIn: true,
        email
      };
    }

    case SIGN_OUT: {
      cookieRemoveAll();
      return initialState;
    }

    default:
      return state;
  }
}
