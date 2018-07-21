import React from "react";
import constants from "../gamelogic/constants";
import { Layer, Stage, Rect } from "react-konva";
import { connect } from "react-redux";

const { fieldWidth, fieldHeight } = constants;

let GameField = ({ playing, paused, gameOver }) => {
  if (playing) {
    return (
      <div>
        <Stage width={fieldWidth} height={fieldHeight}>
          <Layer>
            <Rect fill={"blue"} width={fieldWidth} height={fieldHeight} />
          </Layer>
        </Stage>
      </div>
    );
  }
  return null;
};

const mapStateToProps = ({ gameStatus }) => ({
  playing: gameStatus !== "IDLE",
  paused: gameStatus === "PAUSED",
  gameOver: gameStatus === "GAME_OVER"
});

GameField = connect(mapStateToProps)(GameField);

export default GameField;
