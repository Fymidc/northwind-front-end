
export function addToCart(product){
    
    return{
        type : "ADD_TO_CART",
        payload : product
    }
}

export function removeFromToCart(product){
    return{
        type : "REMOVE_FROM_CART",
        payload : product
    }
}