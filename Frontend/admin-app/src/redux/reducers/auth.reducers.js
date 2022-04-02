import { authConstants } from "../actions/constants";
const initState = {
  token: "",
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

const authReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
        ...action.payload,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        authenticate: true,
        token: action.payload.token,
        user: action.payload.user,
        authenticating: false,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...initState,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
        message: action.payload.message,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...initState,
        error: action.payload.error,
      };
      break;

    default:
      return initState;
  }
  return state;
};
export default authReducer;
