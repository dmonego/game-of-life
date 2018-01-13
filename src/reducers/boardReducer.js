import { Set } from 'immutable';

var generateNeighbors = (coord) => {
    var [x, y] = coord.split(",").map(Number);
    var diffs = [-1, 0 , 1];
    var neighbors = [];
    diffs.forEach((xDiff) => {
        diffs.forEach((yDiff) => {
            if(xDiff !== 0 || yDiff !== 0) {
                neighbors.push(x+xDiff + ',' + (y+yDiff));
            }
        });
    });
    return Set(neighbors);
}

var runGol = (board) => {
    var allNeighbors = board.map(generateNeighbors).reduce((a, b) => a.union(b), Set())
    var countMap = allNeighbors.toMap().map((value, coord) => {
        var neighbors = generateNeighbors(coord);
        var liveNeighbors = neighbors.intersect(board);
        return liveNeighbors.count();
    });
    var results = countMap.filter((value, coord) => {
        if(board.contains(coord)) {
            if (value < 2) 
                return false;
            if (value === 2 || value === 3)
                return true;
            if (value > 3)
                return false;
        }
        //Test if we should create a new item.
        return value === 3;
    }).keySeq().toSet();
    return results;
}

var toggle = (layout, coords) => {
    if(layout.has(coords)) {
        return layout.remove(coords);
    } else {
        return layout.add(coords);
    }
}

var changes = (layout, oldLayout) => {
    var staleLayout = oldLayout || Set();
    var dead = staleLayout.subtract(layout);
    var born = layout.subtract(staleLayout);
    var alive = layout.intersect(staleLayout);
    return {
        dead,
        born,
        alive
    }
}

var newLayout = (state, newLayout) => {
    var oldLayout = state.get('layout');
    var { born, dead, alive } = changes(newLayout, oldLayout);
    return state.withMutations((state) => {
        state.set('layout', newLayout );
        state.set('dead', dead );
        state.set('born', born );
        state.set('alive', alive );
    });

}


const boardReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_CELL':
            return newLayout(state, toggle(state.get('layout'), action.cell_coords));
        case 'STEP':
            return newLayout(state, runGol(state.get('layout')));
        case 'AUTOSTEP':
            if(!state.get('paused')) {
                return newLayout(state, runGol(state.get('layout')));
            }
            break;
        case 'TOGGLE_PLAY':
            return state.set("paused", !state.get('paused'))
        default:
            break;
    }
    return state;
}

export {boardReducer, runGol};