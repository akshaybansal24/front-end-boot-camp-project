import { SELECT_ELECTION_ACTION, VOTER_VERIFY_DONE_ACTION, REFRESH_ELECTION_DONE_ACTION } from '../actions/ballotToolActions';
import { combineReducers } from "redux";


const electionsReducer = (elections = [], action) => {
    if(action.type === REFRESH_ELECTION_DONE_ACTION){
        return action.payload.elections;
    }
    return elections;
};

const ballotReducer = (ballot = {
    election:{},
    voter: {},
    errorMessage: '',
    displayBallotForm: false,
    displayVoterForm: false,
}, action ) => {
    if(action.type === SELECT_ELECTION_ACTION){
        return {...ballot, election: action.payload.election, displayVoterForm: true};
    }
    if(action.type === VOTER_VERIFY_DONE_ACTION){
        if(Object.keys(action.payload.voter).length === 0){
            return {...ballot, errorMessage: 'The voter does not exist'};
        }
        else if(ballot.election.votes.includes(action.payload.voter.id)){
            return {...ballot, errorMessage: 'The voter has already voted in selected election'};
        }else{
            return {...ballot, voter: action.payload.voter, displayBallotForm: true}
        }
    }
    if(action.type === REFRESH_ELECTION_DONE_ACTION){
        return {
            election:{},
            voter: {},
            errorMessage: '',
            displayBallotForm: false,
            displayVoterForm: false
        }
    }
    return ballot;
}

export const ballotToolReducers = combineReducers({
    ballot: ballotReducer,
    elections: electionsReducer
});
