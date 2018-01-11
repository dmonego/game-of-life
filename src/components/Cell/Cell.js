import born from "./born.svg"
import dead from "./dead.svg"
import alive from "./alive.svg"
import React, { Component } from 'react';

class Cell extends Component {
    render () {
        var src = null;
        switch(this.props.status) {
            case "BORN":
                src = born;
                break;
            case "DEAD":
                src = dead;
                break;
            case "ALIVE":
                src = alive;
                break;
            default:
                src = "";
                break;
        }
        return (<img src={src} height="10" width="10" style={{animationPlayState: 'initial'}}/>)
    }
}

export default Cell;