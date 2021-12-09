import { all, append, deleteVoterInDB, replace} from '../apis/voters';

export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST_ACTION';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE_ACTION';
export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST_ACTION';
export const ADD_VOTER_DONE_ACTION = 'ADD_VOTER_DONE_ACTION';
export const ADD_VOTER = 'ADD_VOTER';
export const EDIT_VOTER = 'EDIT';
export const SORT_VOTER = 'SORT';
export const DELETE_VOTER_REQUEST_ACTION = 'DELETE_VOTER_REQUEST_ACTION';
export const DELETE_VOTER_DONE_ACTION = 'DELETE_VOTER_DONE_ACTION';
export const DELETE_VOTER = 'DELETE';
export const SAVE_VOTER = 'SAVE';
export const SAVE_VOTER_REQUEST_ACTION = 'SAVE_VOTER_REQUEST_ACTION';
export const SAVE_VOTER_DONE_ACTION = 'SAVE_VOTER_DONE_ACTION';

export const SORT_ASC = "Ascending";
export const SORT_DESC = "Descending";

export const createRefreshVoterRequestAction = () => ({ type: REFRESH_VOTERS_REQUEST_ACTION});
export const createRefreshVoterDoneAction = voters => (
        { type: REFRESH_VOTERS_DONE_ACTION, payload: {voters}}
    );

export const refreshVoters = () => {
    return dispatch => {
        dispatch(createRefreshVoterRequestAction());
        return all().then(voters => dispatch(createRefreshVoterDoneAction(voters)));
    }
}

export const createAddVoterRequestAction = voter => ({ type: ADD_VOTER_REQUEST_ACTION, payload: {voter} });

export const createAddVoterDoneAction = voter => ({ type: ADD_VOTER_DONE_ACTION, payload: {voter} });

export const addVoter = voter => {
    return dispatch => {
        dispatch(createAddVoterRequestAction(voter));
        append(voter).then(() => dispatch(refreshVoters()));
    };
};

export const createEditVoterAction = voter => ({ type: EDIT_VOTER, payload: {voter} });

export const createDeleteRequestVoterAction = voterID => ({ type: DELETE_VOTER_REQUEST_ACTION, payload: {voterID} });

export const createDeleteDoneVoterAction = voterID => ({ type: DELETE_VOTER_DONE_ACTION, payload: {voterID} });

export const deleteVoter = voterID => {
    return dispatch => {
        dispatch(createDeleteRequestVoterAction(voterID));
        deleteVoterInDB(voterID).then(() => dispatch(refreshVoters()));
    };
}

export const createSortVoterAction = col => ({ type: SORT_VOTER, payload: {col} });

export const createSaveRequestVoterAction = voter => ({ type: SAVE_VOTER_REQUEST_ACTION, payload: {voter} });

export const createSaveDoneVoterAction = voter => ({ type: SAVE_VOTER_DONE_ACTION, payload: {voter} });

export const saveVoter = voter => {
    return dispatch => {
        dispatch(createSaveRequestVoterAction(voter));
        replace(voter).then(() => dispatch(refreshVoters()));
    };
};
