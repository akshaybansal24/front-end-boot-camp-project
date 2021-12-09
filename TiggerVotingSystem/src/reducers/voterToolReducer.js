import { combineReducers } from "redux";

import {
    EDIT_VOTER,
    SORT_VOTER,
    SORT_ASC,
    SORT_DESC,
    REFRESH_VOTERS_DONE_ACTION
} from '../actions/voterToolActions';

const voterList = [
    {id: 1, make: 'Lexus', model: 'NX 300', year: 2021, color: 'Atomic Silver', price: 53000, isEditable: false},
    {id: 2, make: 'Tesla', model: 'Model 3', year: 2021, color: 'Red', price: 72000, isEditable: false}
  ];


const voterReducer = (voterd = voterList, action) => {
    switch(action.type){
        case REFRESH_VOTERS_DONE_ACTION:
            return action.payload.voters;
        default:
            return voters;
    }
}

const editVoterIdReducer = (editVoterId = -1, action) => {
    if(action.type === EDIT_VOTER){
        return action.payload.voter;
    }
    return -1;
}

const votersSortReducer = ( votersSort = {sortCol: 'id', sortDir: SORT_ASC}, action) => {
    if(action.type === SORT_VOTER){
        if(action.payload.col === votersSort.sortCol){
            if(votersSort.sortDir === SORT_ASC)
                return {...votersSort, sortDir: SORT_DESC};
            else
                return {...votersSort, sortDir: SORT_ASC};
        }
        else{
            return {...votersSort, sortCol: action.payload.col, sortDir: SORT_ASC};
        }
    }
    return votersSort;
};

const isLoadingReducer = (isLoading=false, action) => {
    if(action.type.includes("REQUEST"))
        return true;
    if(action.type.includes("DONE"))
        return false;
    return isLoading;
}

export const voterToolReducer = combineReducers({
    voters: voterReducer,
    editVoterId: editVoterIdReducer,
    votersSort: votersSortReducer,
    isLoading: isLoadingReducer
})