import React, { Component } from 'react';
import { combineReducers} from 'redux-immutable';
import { Provider } from 'react-redux';
import { boardReducer } from 'reducers/boardReducer.js';
import Chrome from 'containers/Chrome/Chrome';
import { fromJS, Set } from 'immutable';
import { createStore } from 'redux';
import './App.css';

function getInitialState() {
  var state = {
                board: {
                  width: 40,
                  height: 20,
                  // Layout uses x,y coordinates
                  //  0,0 is the top left
                  layout: Set([ '2,1', '3,2', '1,3', '2,3', '3,3']),
                  born: Set([ '2,1', '3,2', '1,3', '2,3', '3,3'])
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
