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

const campaigns = campaignsReducer(undefined, {type: '@@INIT'});
