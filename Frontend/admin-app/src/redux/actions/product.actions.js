import axiosInstance from "../../helpers/axios";

import { productConstants } from "./constants";

export const addProduct = (form) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.ADD_NEW_PRODUCT_REQUEST });

    const res = await axiosInstance
      .post("/product/create", form)
      .catch((err) => {
        dispatch({
          type: productConstants.ADD_NEW_CATEGORY_FAILURE,
          payload: err,
        });
      });

    if (res.status === 201) {
      dispatch({
        type: productConstants.ADD_NEW_PRODUCT_SUCCESS,
      });
    }
  };
};

export const getProducts = (form) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });

    const res = await axiosInstance.get("/product/get", form).catch((err) => {
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_FAILURE,
        payload: err,
      });
    });

    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products: res.data.products },
      });
    }
  };
};
