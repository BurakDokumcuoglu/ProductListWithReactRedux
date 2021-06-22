import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer"; 
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
import saveProductReducer from "./saveProductReducer"

const rootReducer = combineReducers({  //oluşturulan bütün reducerları bir araya getiriyoruz,başka reducerlar , ile eklenebilir
    changeCategoryReducer , //   ChangeCategoryReducer : ChangeCategoryReducer  ile aynı anlamdadır(ES6)
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer
})

export default rootReducer;