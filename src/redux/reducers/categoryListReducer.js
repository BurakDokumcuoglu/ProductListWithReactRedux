import * as actionTypes from "../actions/ActionTypes"
import initial from "./initialState";



// REDUCER HER ZAMAN STATE DÖNDÜRÜR
export default function changeCategoryReducer(state=initial.categories,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;
    
        default:
            return state;
    }
}