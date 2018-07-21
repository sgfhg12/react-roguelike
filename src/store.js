import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gameStatus } from './redux/reducers'; 

const reducer = combineReducers({ 
    gameStatus, 
});

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store; 