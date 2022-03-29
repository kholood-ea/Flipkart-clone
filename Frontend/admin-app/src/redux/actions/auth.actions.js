import { authConstants } from "./constants";
import axiosInstance from "../../helpers/axios";

export const login = (user) => {
  // console.log(user);
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    const res = await axiosInstance
      .post("/admin/signin", {
        ...user,
      })
      .catch((err) => {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: err,
        });
      });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    }
  };
};

export const isLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: "Signin Failed",
      });
    }
  };
};
