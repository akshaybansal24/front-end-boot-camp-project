import { allElections, appendElection } from '../apis/elections';

export const REFRESH_ELECTIONS_REQUEST_ACTION = "REFRESH_ELECTIONS_REQUEST_ACTION";
export const REFRESH_ELECTIONS_DONE_ACTION = "REFRESH_ELECTIONS_DONE_ACTION";
export const ADD_ELECTION_REQUEST_ACTION = "ADD_ELECTION_REQUEST_ACTION";
export const ADD_ELECTION_DONE_ACTION = "ADD_ELECTION_DONE_ACTION";

export const ADD_QUESTION_ACTION = 'ADD_QUESTION_ACTION';


export const createRefreshElectionsRequestAction = () => ({type: REFRESH_ELECTIONS_REQUEST_ACTION});
export const createRefreshElectionsDoneAction = elections => (
    {type: REFRESH_ELECTIONS_DONE_ACTION, payload: {elections}
});

export const refreshElections = () => {
    //This function is the function action object
    //when middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createRefreshElectionsRequestAction());
        return allElections().then(elections => {
            dispatch(createRefreshElectionsDoneAction(elections));
        });
    };
};

export const createAddElectionRequestAction = election => ({ type: ADD_ELECTION_REQUEST_ACTION, payload: {election} });
export const createAddElectionDoneAction = election => ({ type: ADD_ELECTION_DONE_ACTION, payload: {election} });

export const addElection = election => {
    return dispatch => {
        dispatch(createAddElectionRequestAction(election));
        appendElection(election).then(() => dispatch(refreshElections()));
    };
};

export const createAddQuestionAction = questions => ({type: ADD_QUESTION_ACTION, payload: {questions}});

