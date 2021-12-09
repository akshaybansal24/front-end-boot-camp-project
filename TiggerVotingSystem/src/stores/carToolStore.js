import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { carToolReducer } from '../reducers/carToolReducer';

export const carToolStore = createStore(
        carToolReducer,
        applyMiddleware(thunk)
    );