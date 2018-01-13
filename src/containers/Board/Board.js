import React, { Component } from 'react';
import { connect } from 'react-redux';
import { _ } from 'underscore';
import './Board.css';
import { toggle_cell } from 'actions/board_actions';
import Cell from 'components/Cell/Cell';
import { Set } from 'immutable';

class Board extends Component {

    render () {
        var height = this.props.height;
        var width = this.props.width;
        var rows = _.range(height).map( y => {
            return (<tr key={y}>
                    {_.range(width).map(x => {
                        var keyval = (x+1)+','+ (y+1);
                        var status = null;
                        if (this.props.dead.contains(keyval)) {
                            status = 'DEAD';
                        }
                        if (this.props.born.contains(keyval)) {
                            status = 'BORN';
                        }
                        if (this.props.alive.contains(keyval)) {
                            status = 'ALIVE';
                        }
                        return (<td key={keyval}><Cell coord={keyval} status={status} onClick={() => this.props.dispatch(toggle_cell(keyval))} /></td>);
                    })}
                </tr>);
        });
        return <div className="boardParent">
            <table className="golBoard"><tbody>{rows}</tbody></table>
        </div>
    }
}

var mapStateToProps = (state) => {
    return {
        height: state.get('board').get('height'),
        width: state.get('board').get('width'),
        dead: state.get('board').get('dead') || Set(),
        born: state.get('board').get('born') || Set(),
        alive: state.get('board').get('alive') || Set()
    };
}

export default connect(mapStateToProps)(Board);