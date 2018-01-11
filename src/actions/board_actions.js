

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

export { toggle_cell, step };