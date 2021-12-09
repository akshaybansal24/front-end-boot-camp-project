import { createStore } from 'redux';
import { calcToolReducer } from '../reducers/calToolReducers';

export const calcToolStore = createStore(calcToolReducer);