import {ADD_TO_CART} from './types';

export function addToCart(item){
    console.log('item :: ', item);
    return{type : ADD_TO_CART, payload:item}
}