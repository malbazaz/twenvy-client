import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/productsReducer';
import campaignsReducer from '../reducers/campaignsReducer';
import formData from '../reducers/formData'

const reducers = combineReducers({
    productsReducer, 
    campaignsReducer, 
    formData
})

const middleware = [thunk]

export default createStore(
    reducers, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware)
)
