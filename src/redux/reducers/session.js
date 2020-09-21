import { LOGIN, LOGOUT } from '../actions';

const defaultState = {
  token: '',
  user: {},
};

const session = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token, user: action.user };
    case LOGOUT:
      return { ...state, token: '', user: {} };
    default:
      return state;
  }
};

export default session;
