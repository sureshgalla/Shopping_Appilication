import {LOAD_PRODUCTS} from '../actions/types';
const products = (state=[],action) => {
     switch(action.type){
        case LOAD_PRODUCTS:
            console.log('loadProducts', action.payload);
            return [...state, ...action.payload];
        default: return state
     }
}


export default products