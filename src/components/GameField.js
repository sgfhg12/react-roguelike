import React from 'react'; 
import constants from './constants';
import { Layer, Stage, Rect} from 'react-konva';

const { fieldWidth, fieldHeight} = constants; 

const GameField = () => {
    return (
        <div>
        <Stage width={fieldWidth} height={fieldHeight}>
        <Layer>
        <Rect fill={'blue'} width={ fieldWidth} height= {fieldHeight}/>
        </Layer>
        </Stage>
        </div>
    )
}

export default GameField; 