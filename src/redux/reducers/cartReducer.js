import * as actionTypes from "../actions/ActionTypes"
import initial from "./initialState";


export default function cartReducer(state=initial.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(item => item.product.id === action.payload.product.id);
            if(addedItem){
                var newState = state.map(cartItem => {
                    if(cartItem.product.id === action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem;
                })
                return newState;
            }else{
                return [...state, {...action.payload}]; // state'in kopyası alınır, üstüne payload eklenir
            }

        case actionTypes.REMOVE_FROM_CART:
            const newState2 = state.filter(cartItem => cartItem.product.id !== action.payload.id)
            return newState2;
        default:
            return state;
    }
}