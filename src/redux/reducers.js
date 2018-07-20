import constants from '../components/constants';
import * as actions from './actions';

const { gameField, tetrominos } = constants; 

function gameStatus(state = 'IDLE', action) {
    switch (action.type) {
    case action.START_GAME:
    default:
        return state;
    }
}

function activeTetrominos(state = gameField, action){
    switch(action.type) {
    case actions.ADD_TETROMINO:
        return 
    }
}

