

var toggle_cell = (cell_coords) => {
    return {
        type: 'TOGGLE_CELL',
        cell_coords
    };
}

var step = () => {
    return {
        type: 'STEP'
    }
}

var autostep_start = (dispatch) => {
    setInterval(() => dispatch({type: 'AUTOSTEP'}), 600);
}


var toggle_play = () => {
    return {
        type: "TOGGLE_PLAY"
    }
}

export { toggle_cell, step, autostep_start, toggle_play};