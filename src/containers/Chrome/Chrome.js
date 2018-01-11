import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Chrome.css';
import Board from 'containers/Board/Board'
import { step } from 'actions/board_actions.js';

class Chrome extends Component {
    render () {
        return <div>
            <Board />
            <button onClick={() => this.props.dispatch(step())} >Step</button>
        </div>
    }
}


export default connect()(Chrome);