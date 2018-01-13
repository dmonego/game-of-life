import born from "./born.svg"
import dead from "./dead.svg"
import alive from "./alive.png"
import empty from "./empty.png"
import "./Cell.css"
import React, { Component } from 'react';

var count = 0;

class Cell extends Component {
    render () {
        var src = null;
        var alt = "Empty, Click to create";
        switch(this.props.status) {
            case "BORN":
                src = born + "?_=" + count;
                alt = "Alive, Click to clear";
                break;
            case "DEAD":
                src = dead + "?_=" + count;
                break;
            case "ALIVE":
                src = alive;
                alt = "Alive, Click to clear";
                break;
            default:
                src = empty;
                break;
        }
        //Cache bust so chrome plays the animation
        count++;
        return (<a onClick={this.props.onClick}><img src={src } alt={alt} height="20" width="20" /></a>)
    }
}

export default Cell;