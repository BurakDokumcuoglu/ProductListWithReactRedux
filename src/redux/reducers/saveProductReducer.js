import * as actionTypes from "../actions/ActionTypes";
import initial from "./initialState";

// REDUCER HER ZAMAN STATE DÖNDÜRÜR
export default function saveProductReducer(
  state = initial.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload;
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
