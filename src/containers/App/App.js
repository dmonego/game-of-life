import React, { Component } from 'react';
import { combineReducers} from 'redux-immutable';
import { Provider } from 'react-redux';
import { boardReducer } from '../../reducers/boardReducer.js';
import Chrome from '../../containers/Chrome/Chrome';
import { fromJS, Set } from 'immutable';
import { createStore } from 'redux';
import './App.css';

function getInitialState() {
  var glider = Set([ '2,1', '3,2', '1,3', '2,3', '3,3']);
  var heart = Set(['20,5', '20,6', '21,6', '21,7', '22,7', '22,8', '23,7', '23,6', '24,6', '24,5']);
  var layout = glider.union(heart);
  var state = {
                board: {
                  paused: true,
                  width: 60,
                  height: 30,
                  // Layout uses x,y coordinates
                  //  0,0 is the top left
                  layout: layout,
                  born: layout
                }
              };
  return state;

}

const initialState = fromJS(getInitialState());
const rootReducer = combineReducers({board: boardReducer});
const store = createStore(rootReducer, initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Chrome />
        </div>
      </Provider>
    );
  }
}

export default App;
