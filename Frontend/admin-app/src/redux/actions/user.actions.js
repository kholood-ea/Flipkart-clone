import { userConstants } from "./constants";
import axiosInstance from "../../helpers/axios";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.SIGNUP_REQUEST });

    const res = await axiosInstance
      .post("/admin/signup", {
        ...user,
      })
      .catch((err) => {
        dispatch({
          type: userConstants.SIGNUP_FAILURE,
          payload: err,
        });
      });

    if (res.status === 201) {
      const { message } = res.data;

      dispatch({
        type: userConstants.SIGNUP_SUCCESS,
        payload: {
          message,
        },
      });
    }
  };
};
