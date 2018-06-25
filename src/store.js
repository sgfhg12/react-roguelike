import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'reduxt-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ 
});

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleWare(thunkMiddleWare))
);

export default store; 