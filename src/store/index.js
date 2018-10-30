import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
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

// export default createStore(
//     reducers, applyMiddleware(...middleware)
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
applyMiddleware(...middleware)
  ));

export default store;