import React from 'react'; 
import { connect } from 'react-redux';
import { startGame } from '../redux/actions';
class GameMenu extends React.Component {
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
            <button onClick={this.props.startGame}>Start Game</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => (
    {
        startGame: () => dispatch(startGame()) 
    }
)

export default connect(null, mapDispatchToProps)(GameMenu);