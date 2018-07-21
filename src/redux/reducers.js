import constants from '../components/constants';
import * as actions from './actions';

const { gameField, tetrominos } = constants; 

function gameStatus(state = 'IDLE', action) {
    switch (action.type) {
    case actions.START_GAME:
    case actions.UNPAUSE:
        return 'PLAYING';
    case actions.PAUSE:
        return 'PAUSED';
    case actions.GAME_OVER:
        return 'GAME_OVER';
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

