import { combineReducers } from 'redux';
import {electionReducers} from './electionToolReducers';
import {voterToolReducer} from './voterToolReducer';

export const tiggerVotingReducers = combineReducers({
    electionState: electionReducers,
    voterState: voterToolReducer
});