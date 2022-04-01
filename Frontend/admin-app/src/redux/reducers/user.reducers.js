import { userConstants } from "../actions/constants";
const initState = {
  error: null,
  message: "",
  loading: false,
};

const userReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case userConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    default:
      return initState;
  }
  return state;
};
export default userReducer;
