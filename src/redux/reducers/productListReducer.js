import * as actionTypes from "../actions/ActionTypes"
import initial from "./initialState";



// REDUCER HER ZAMAN STATE DÖNDÜRÜR
export default function productListReducer(state=initial.products,action){
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload;
    
        default:
            return state;
    }
}