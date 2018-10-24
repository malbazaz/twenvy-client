import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const campaignsReducer = (states = [], action) =>{
    switch(action.type) {
        case 'START_CAMPAIGN':
            return action.start
        default:
        return state;
    }
}

const reducers = combineReducers({
    campaigns: campaignReducer
})

const middleware = [thunk]

export default createStore(
    reducers, applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)
