import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';


export default createStore(
    reducers,
    applyMiddleWare(...middlewares)
)

const campaignsReducer = (states = [], action) =>{
    switch(action.type) {
        case 'SHOW_CAMPAIGN':
            return action.show
        default:
            return state;
    }
}

const productsReducer = (state = [], action) =>{
    switch(action.type){
        case 'SHOW_PRODUCT':
            return action.show 
        default:
            return state;
    }
}


const reducers = combineReducers({
    productsReducer, 
    campaignsReducer
})

const middleware = [thunk]

export default createStore(
    reducers, applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)
