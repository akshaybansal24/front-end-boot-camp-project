import { VOTER_SUBMISSION_END } from '../actions/ballotToolActions';
import { combineReducers } from "redux";

const initialBallot = {
    election: '',
    question: '',
    yes: 0,
    no: 0,
}
const ballotToolReducer = (ballot=[initialBallot], action) => {
    // when user submits vote, state election count is updated
    //voter submission status should also be updated?
    if (action.type=== VOTER_SUBMISSION_END) {
        
    }

    return ballot

};

export const ballotToolReducers = combineReducers({
    ballot: ballotToolReducer
});
