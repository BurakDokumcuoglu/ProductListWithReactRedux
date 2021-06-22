import * as actionTypes from "../actions/ActionTypes"
import initial from "./initialState";



// REDUCER HER ZAMAN STATE DÖNDÜRÜR
export default function changeCategoryReducer(state=initial.currentCategory.categoryName,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
    
        default:
            return state;
    }
}