import { combineReducers } from "redux";

import {
 SORT_COLOR,
 REFRESH_COLORS_DONE_ACTION,
 REFRESH_COLORS_REQUEST_ACTION
} from '../actions/colorToolActions';

const SORT_ASCENDING = "Ascending";
const SORT_DESCENDING = "Descending";

const colorReducer = (colors = [], action) => {
    switch(action.type){
        case REFRESH_COLORS_DONE_ACTION:
            return action.payload.colors;
        default:
            return colors;
    }
};

const colorsSortReducer = (colorsSort= { sortCol: 'id', sortDir: SORT_ASCENDING }, action) => {

    if(action.type === SORT_COLOR){
        if(colorsSort.sortCol === 'id'){
            return { ...colorsSort, sortCol: 'name'};
        }else{
            if(colorsSort.sortDir === SORT_ASCENDING){
                return {...colorsSort, sortDir: SORT_DESCENDING}
            }else{
                return {...colorsSort, sortCol: 'id', sortDir: SORT_ASCENDING};
            }
        }
    }
    return colorsSort;
};

const isLoadingReducer = (isLoading=false, action) => {
    if(action.type.includes("REQUEST"))
        return true;
    if(action.type.includes("DONE"))
        return false;
    return isLoading;
}

export const colorToolReducer = combineReducers({
    colors: colorReducer,
    colorsSort: colorsSortReducer,
    isLoading: isLoadingReducer
});
