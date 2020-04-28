import { actionType } from "../contants/ProductListConstant";

const initialState = {
  categoryList: [],
  productList: [],
};

export const ProductListManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GETCATEGORY: {
      state.categoryList = action.data;
      return { ...state };
    }
    case actionType.GETPRODUCTLIST: {
      let { data } = action.data;
      state.productList = data;
      return { ...state };
    }
    default:
      return state;
  }
};
