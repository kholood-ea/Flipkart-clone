import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_REQUEST:
      state = { ...state, loading: true };

      break;
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = { ...state, products: action.payload.products };

      break;
    case productConstants.GET_ALL_PRODUCTS_FAILURE:
      state = { ...state, error: action.payload };

      break;

    default:
      state = { ...state };
      break;
  }
  return state;
}
