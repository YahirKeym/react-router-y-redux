import {createStore,combineReducers} from 'redux';
import todoReducer from './todos/reducers.js';

let reducers = combineReducers({todoReducer});

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;