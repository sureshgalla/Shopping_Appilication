import { combineReducers } from "redux";
import products from './productsReducers';
import cart from './cartReducer';

const rootReducer  = combineReducers({
    products,
    cart
});

export default rootReducer;