import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { colorToolReducer } from '../reducers/colorToolReducer';

export const colorToolStore = createStore(
        colorToolReducer,
        applyMiddleware(thunk)
    );