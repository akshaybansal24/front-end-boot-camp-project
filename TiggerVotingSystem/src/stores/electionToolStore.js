import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {electionReducers} from '../reducers/electionToolReducers';

export const electionToolStore = createStore(
        electionReducers,
        applyMiddleware(thunk)
    );