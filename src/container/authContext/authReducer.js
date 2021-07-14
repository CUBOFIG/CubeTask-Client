import {
  REGISTER_SUCCESSFUL,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCESSFUL,
  LOGIN_ERROR,
  SIGN_OFF
} from "types"

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFUL:
    case LOGIN_SUCESSFUL:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
        load: false
      }

    case SIGN_OFF:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: action.payload,
        load: false
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        load: false
      }

    default:
      return state;
  }
}


export default authReducer;
