import * as types from "../action.types";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case types.GET_PRODUCTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case types.GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          todos: payload,
          isError: false,
        };
      case types.GET_PRODUCTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
        
      default:
        return state;
    }
}

export { productReducer };