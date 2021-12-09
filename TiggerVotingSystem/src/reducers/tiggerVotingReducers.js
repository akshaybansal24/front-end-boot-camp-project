import { combineReducers } from 'redux';
import {electionReducers} from './electionToolReducers';
import {voterToolReducer} from './voterToolReducer';
import { ballotToolReducers } from './ballotToolReducer';
import { questionsReducer } from './questionsReducer';

export const tiggerVotingReducers = combineReducers({
    electionState: electionReducers,
    voterState: voterToolReducer,
    ballotState: ballotToolReducers,
    questionsState: questionsReducer
});