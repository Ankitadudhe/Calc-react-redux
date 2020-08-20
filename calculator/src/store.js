import {createStore, applyMiddleware} from 'redux';
import * as allReducers from './reducers';
import {combineReducers} from 'redux'

var rootReducer = combineReducers(allReducers);

export default function configureStore() {
    return createStore(
        rootReducer
      
    );
}