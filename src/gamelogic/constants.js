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
    shapes:[ 'square', 'straight', 'leftLShape', 'rightLShape', 'tShape', 'rightS', 'leftS'],
    tetrominos: {
        square: {
            shape: [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'green',
        },
        straight: {
            shape: [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0], 
                [0, 0, 0, 0],
            ],
            color: 'blue',
        },
        leftLShape: {
            shape: [
                [1, 1, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'yellow',

        },
        rightLShape: {
            shape: [
                [0, 0, 1, 1],
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 0],
            ],
            color: 'red',
        },
        tShape: {
            shape: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'purple',
        }, 
        rightS: {
            shape: [
                [1, 1, 0, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            color: 'teal',
        },
        leftS: {
            shape: [
                [0, 1, 1, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            color: 'orange',
        }
    }, 
    gameField
};



