import { List } from 'immutable';
 
const gameLine = List([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

const gameField = (() => {
    const matrix = []; 
    for(let i = 0; i < 20; i++){
        matrix.push(gameLine)
    }
    return List(matrix)
})();

export default {
    fieldWidth: 400,
    fieldHeight: 700, 
    tetrominos: {
        square: {
            shape: [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        }
    }, 
    gameField
};



