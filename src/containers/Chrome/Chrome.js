import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Chrome.css';
import pause from './pause.svg';
import play from './play.svg';
import step_button from './step.svg';
import Board from '../../containers/Board/Board'
import { step, autostep_start, toggle_play } from '../../actions/board_actions.js';

class Chrome extends Component {
    componentWillMount () {
        autostep_start(this.props.dispatch);
    }

    render () {
        var play_pause_src = this.props.paused ? play : pause;
        var play_pause_alt = this.props.paused ? "Play" : "Pause";
        return <div>
            <Board />
            <div className="controls">
                <a className="control-button" onClick={() => this.props.dispatch(step())} ><img src={step_button} alt="Run one Step"/></a>
                <a className="control-button" onClick={() => this.props.dispatch(toggle_play())} ><img src={play_pause_src} alt={play_pause_alt}/></a>
            </div>
        </div>
    }
}

var mapStateToProps = (state) => {
    return {
        paused: state.get('board').get('paused'),
    };
}


export default connect(mapStateToProps)(Chrome);