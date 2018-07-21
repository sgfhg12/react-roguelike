import constants from '../gamelogic/constants';


//ACTION TYPES
export const START_GAME = 'START_GAME';
export const PAUSE = 'PAUSE';
export const UNPAUSE = 'UNPAUSE';
export const GAME_OVER = 'GAME_OVER';
export const SPAWN_TETROMINO = 'SPAWN_TETROMINO';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const ROTATE = 'ROTATE';

//ACTION CREATORS

export const startGame = () => {
    const { shapes } = constants; 
    const firstRandom = Math.floor(Math.random() * 7);
    const nextRandom = Math.floor(Math.random() * 7);
    const firstShape = shapes[firstRandom];
    const nextShape = shapes[nextRandom]; 

    return {
        type: START_GAME,
        firstShape, 
        nextShape,
    };
};



