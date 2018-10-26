const productsReducer = (state = [], action) =>{
    switch(action.type){
        case 'GET_PRODUCTS_SUCCESS':
            return  state.concat(action.products)
        default:
            return state;
    }
}

export default productsReducer; 