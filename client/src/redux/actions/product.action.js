import * as types from '../action.types';

export const GetProductsRequest = () => {
    return {
        type: types.GET_PRODUCTS_REQUEST,
    }
}

export const GetProductsSuccess = (payload) => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload:payload
    }
}

export const GetProductsFailure = (err) => {
    return {
        type: types.GET_PRODUCTS_FAILURE,
        payload:err
    }
}