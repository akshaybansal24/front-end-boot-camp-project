import { USER_VERIFY_START, USER_VERIFY_END, VOTER_SUBMISSION_START, VOTER_SUBMISSION_END } from '../actions/ballotToolActions';
import { combineReducers } from "redux";

const ballotToolReducer = (state, action) => {
    if (action.type=== USER_VERIFY_START) {


    }
    if (action.type=== USER_VERIFY_END) {

    }
    if (action.type=== VOTER_SUBMISSION_START) {

    }
    if (action.type=== VOTER_SUBMISSION_END) {

    }

    return state

};

export const ballotToolReducers = combineReducers({
    ballot: ballotToolReducer
});
