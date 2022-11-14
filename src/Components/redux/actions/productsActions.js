import {LOAD_PRODUCTS} from './types.js';

export const loadProducts =(products)=> {
    return{
        type:LOAD_PRODUCTS,payload:products
    }
}

export const fetchApi = () =>{
    return(dispatch)=>{
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(products=>dispatch(loadProducts(products))).catch()
    }
}

