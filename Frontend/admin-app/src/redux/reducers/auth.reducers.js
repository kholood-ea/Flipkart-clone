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
};

const Auth = (state = initState, action) => {
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
        initState,
      };
      break;

    default:
      return initState;
  }
  return state;
};
export default Auth;
