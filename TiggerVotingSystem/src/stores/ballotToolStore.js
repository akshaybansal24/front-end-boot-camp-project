import { createStore } from 'redux';
import { ballotToolReducer } from '../reducers/ballotToolReducers';

export const calcToolStore = createStore(ballotToolReducer);