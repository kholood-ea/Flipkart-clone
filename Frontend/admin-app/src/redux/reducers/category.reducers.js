import { categoryConstants } from "../actions/constants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const buildNewCategories = (categories, category) => {
  let oldCat = categories.categoryList;
  let parentId = category.parentId;
  let newCat = oldCat;
  if (!parentId) {
    newCat.push({ ...category, children: [] });
  }
  if (parentId) {
    oldCat.forEach((cat) => {
      if (cat._id === parentId) {
        cat.children.push({ ...category, children: [] });
      } else {
        buildNewCategories(
          { categoryList: cat.children },
          { ...category, children: [] }
        );
      }
    });
  }
  console.log(newCat);
  return { categoryList: newCat };
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
      state = { ...state, loading: true };

      break;
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = { ...state, categories: action.payload.categories };

      break;
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
      state = { ...state, error: action.payload };

      break;

    case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
      state = { ...state, loading: true };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(state.categories, category);
      state = {
        ...state,
        categories: updatedCategories,
        loading: false,
      };
      // console.log(updatedCategories);

      break;
    case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
      state = { initialState };

      break;

    default:
      state = { ...state };
      break;
  }
  return state;
}
