import {runGol} from './boardReducer';
import {Set} from 'immutable';
/*
A simple known GOL object that moves indefinitely

Input is:
 12345
1
2  *
3   *
4 ***
5

Output should be:
 12345
1
2
3 * *
4  **
5  *
6

*/
it('moves a glider', () => {
    var initialState = Set(['3,2', '4,3', '2,4', '3,4', '4,4']);
    var outputState = Set(['2,3', '4,3', '3,4', '4,4', '3,5']);
    var result = runGol(initialState);
    expect(outputState).toEqual(result);
});