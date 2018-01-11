import React, { Component } from 'react';
import { connect } from 'react-redux';
import { _ } from 'underscore';
import './Board.css';
import { toggle_cell } from 'actions/board_actions';
import Cell from 'components/Cell/Cell';
import { Set } from 'immutable';

class Board extends Component {

    render () {
        var height = 20;
        var width = 25;
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
                        return <Cell key="keyval" status={status} onClick={() => toggle_cell(keyval)} />;
                    })}
                </tr>);
        });
        console.log(JSON.stringify(this.props));
        return <div>
            <table><tbody>{rows}</tbody></table>
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