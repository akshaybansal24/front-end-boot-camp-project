import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { tiggerVotingReducers } from '../reducers/tiggerVotingReducers';

export const tiggerVoterStore = createStore(
        tiggerVotingReducers,
        applyMiddleware(thunk)
    );