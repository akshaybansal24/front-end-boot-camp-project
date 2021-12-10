
import { getOneVoter } from '../apis/voters';
import { replaceElection, allElections } from '../apis/elections';

export const REFRESH_ELECTION_REQUEST_ACTION = "REFRESH_ELECTION_REQUEST_ACTION";
export const REFRESH_ELECTION_DONE_ACTION = "REFRESH_ELECTION_DONE_ACTION";
export const REFRESH_ELECTION_ACTION = "REFRESH_ELECTION_ACTION";
export const VOTER_VERIFY_REQUEST_ACTION = 'VOTER_VERIFY_REQUEST_ACTION';
export const VOTER_VERIFY_DONE_ACTION = 'VOTER_VERIFY_DONE_ACTION';
export const VERIFY_VOTER_ACTION = 'VERIFY_VOTER_ACTION';

export const SELECT_ELECTION_ACTION = 'SELECT_ELECTION_ACTION';
export const SELECT_VOTER_ACTION = 'SELECT_VOTER_ACTION';

export const VOTE_CAST_ACTION = "VOTE_CAST_ACTION";
export const VOTE_CAST_REQUEST_ACTION = "VOTE_CAST_REQUEST_ACTION";
export const VOTE_CAST_DONE_ACTION = "VOTE_CAST_DONE_ACTION";

export const createRefreshElectionRequestAction = () => ({ type: REFRESH_ELECTION_REQUEST_ACTION});
export const createRefreshElectionDoneAction = elections => ({ type: REFRESH_ELECTION_DONE_ACTION , payload: {elections} });

export const createRefreshElectionAction = () => {
        //This function is the function action object
        //when middleware invokes this function is passes in the store's dispatch method
        return dispatch => {
            dispatch(createRefreshElectionRequestAction());
            return allElections().then(elections => {
                dispatch(createRefreshElectionDoneAction(elections));
            });
        };
};
    

export const createSelectElectionAction = election => ({ type: SELECT_ELECTION_ACTION, payload: {election}});

export const createVerifyVoterRequestAction = voterId => ({ type: VOTER_VERIFY_REQUEST_ACTION, payload: {voterId}});

export const createVerifyVoterDonetAction = voter => ({ type: SELECT_ELECTION_ACTION, payload: {voter}});

export const createVoterVerifyAction = voterId => {
    return dispatch => {
        dispatch(createVerifyVoterRequestAction(voterId));
        getOneVoter(voterId).then(voter => dispatch(createVerifyVoterDonetAction(voter)));
    };
}

export const createVoteCastRequestAction = (election) => ({ type: VOTE_CAST_REQUEST_ACTION, payload: {election} });

export const createVoteCastDoneAction = (election) => ({ type: VOTE_CAST_REQUEST_ACTION, payload: {election} });

export const createVoteCastAction = election =>{
    return dispatch => {
        dispatch(createVoteCastRequestAction(election));
        replaceElection(election).then(() => dispatch(createRefreshElectionAction()));
    };
}
