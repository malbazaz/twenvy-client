const productsReducer = (state = [], action) =>{
    switch(action.type){
        case 'SHOW_PRODUCT':
            return action.show 
        default:
            return state;
    }
}

export default productsReducer; 