import {createStore,applyMiddleware} from "redux";
import rootReducer from "./index"
import thunk from "redux-thunk"


export default function configureStore(){  //createStore metoduna rootreducer'ı veriyoruz ve store'u oluşturuyoruz
    return createStore(rootReducer,applyMiddleware(thunk))
}