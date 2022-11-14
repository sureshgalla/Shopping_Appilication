import { ADD_TO_CART } from "../actions/types";

export default function cartReducer(state={},action){
    switch(action.type){
        case ADD_TO_CART:
            console.log('cartItem',action.payload);
             return action.payload
        default :
        return state
    }
}