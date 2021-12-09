import { combineReducers } from "redux";

import {
    EDIT_CAR,
    SORT_CAR,
    SORT_ASC,
    SORT_DESC,
    REFRESH_CARS_DONE_ACTION
} from '../actions/carToolActions';

const carList = [
    {id: 1, make: 'Lexus', model: 'NX 300', year: 2021, color: 'Atomic Silver', price: 53000, isEditable: false},
    {id: 2, make: 'Tesla', model: 'Model 3', year: 2021, color: 'Red', price: 72000, isEditable: false}
  ];


const carReducer = (cars = carList, action) => {
    switch(action.type){
        case REFRESH_CARS_DONE_ACTION:
            return action.payload.cars;
        default:
            return cars;
    }
}

const editCarIdReducer = (editCarId = -1, action) => {
    if(action.type === EDIT_CAR){
        return action.payload.car;
    }
    return -1;
}

const carsSortReducer = ( carsSort = {sortCol: 'id', sortDir: SORT_ASC}, action) => {
    if(action.type === SORT_CAR){
        if(action.payload.col === carsSort.sortCol){
            if(carsSort.sortDir === SORT_ASC)
                return {...carsSort, sortDir: SORT_DESC};
            else
                return {...carsSort, sortDir: SORT_ASC};
        }
        else{
            return {...carsSort, sortCol: action.payload.col, sortDir: SORT_ASC};
        }
    }
    return carsSort;
};

const isLoadingReducer = (isLoading=false, action) => {
    if(action.type.includes("REQUEST"))
        return true;
    if(action.type.includes("DONE"))
        return false;
    return isLoading;
}

export const carToolReducer = combineReducers({
    cars: carReducer,
    editCarId: editCarIdReducer,
    carsSort: carsSortReducer,
    isLoading: isLoadingReducer
})