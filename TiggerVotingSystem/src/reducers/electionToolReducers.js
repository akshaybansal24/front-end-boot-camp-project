import { combineReducers } from "redux";

import { REFRESH_ELECTIONS_DONE_ACTION } from '../actions/electionToolActions';

// const initialQuestion = {
//     id: 1,
//     question: '',
//     yes: 0,
//     no: 0
// }

const electionReducer = (elections = [], action) => {
    switch(action.type){
        case REFRESH_ELECTIONS_DONE_ACTION:
            return action.payload.elections;
        default:
            return elections;
    }
};

const isLoadingReducer = (isLoading=false, action) => {
    if(action.type.includes("REQUEST"))
        return true;
    if(action.type.includes("DONE"))
        return false;
    return isLoading;
}

export const electionReducers = combineReducers({
    elections: electionReducer,
    isLoading: isLoadingReducer,
});
