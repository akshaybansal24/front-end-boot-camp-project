import { createStore } from 'redux';
import thunk from 'redux-thunk';

import { questionsReducer } from '../reducers/questionsReducer';

export const questionToolStore = createStore(
        questionsReducer
    );