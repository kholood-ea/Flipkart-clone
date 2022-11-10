import axiosInstance from "../../helpers/axios";

import { categoryConstants } from "./constants";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
    const res = await axiosInstance.get("category/getcategories").catch((err) =>
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
        payload: err,
      })
    );
    if (res.status === 200) {
      const categoryList = res.data;
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: categoryList },
      });
    }
  };
};

export const addCategory = (form) => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST });

    const res = await axiosInstance
      .post("/category/create", form)
      .catch((err) => {
        dispatch({
          type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
          payload: err,
        });
      });

    if (res.status === 201) {
      dispatch({
        type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
        payload: { category: res.data.category },
      });
    }
  };
};
