import {combineReducers} from 'redux'
import {productReducer} from './products/product.reducer'
import {messageReducer} from  './message/message.reducer'
let rootReducer = combineReducers({message:messageReducer,product:productReducer})

export {rootReducer}