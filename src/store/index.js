import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/productsReducer';
import campaignsReducer from '../reducers/campaignsReducer';

const reducers = combineReducers({
    productsReducer, 
    campaignsReducer
})

const middleware = [thunk]

export default createStore(
    reducers, applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)
