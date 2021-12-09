import { all, append, deleteCarInDB, replace} from '../apis/cars';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST_ACTION';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE_ACTION';
export const ADD_CAR_REQUEST_ACTION = 'ADD_CAR_REQUEST_ACTION';
export const ADD_CAR_DONE_ACTION = 'ADD_CAR_DONE_ACTION';
export const ADD_CAR = 'ADD_CAR';
export const EDIT_CAR = 'EDIT';
export const SORT_CAR = 'SORT';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST_ACTION';
export const DELETE_CAR_DONE_ACTION = 'DELETE_CAR_DONE_ACTION';
export const DELETE_CAR = 'DELETE';
export const SAVE_CAR = 'SAVE';
export const SAVE_CAR_REQUEST_ACTION = 'SAVE_CAR_REQUEST_ACTION';
export const SAVE_CAR_DONE_ACTION = 'SAVE_CAR_DONE_ACTION';

export const SORT_ASC = "Ascending";
export const SORT_DESC = "Descending";

export const createRefreshCarRequestAction = () => ({ type: REFRESH_CARS_REQUEST_ACTION});
export const createRefreshCarDoneAction = cars => (
        { type: REFRESH_CARS_DONE_ACTION, payload: {cars}}
    );

export const refreshCars = () => {
    return dispatch => {
        dispatch(createRefreshCarRequestAction());
        return all().then(cars => dispatch(createRefreshCarDoneAction(cars)));
    }
}

export const createAddCarRequestAction = car => ({ type: ADD_CAR_REQUEST_ACTION, payload: {car} });

export const createAddCarDoneAction = car => ({ type: ADD_CAR_DONE_ACTION, payload: {car} });

export const addCar = car => {
    return dispatch => {
        dispatch(createAddCarRequestAction(car));
        append(car).then(() => dispatch(refreshCars()));
    };
};

export const createEditCarAction = car => ({ type: EDIT_CAR, payload: {car} });

export const createDeleteRequestCarAction = carID => ({ type: DELETE_CAR_REQUEST_ACTION, payload: {carID} });

export const createDeleteDoneCarAction = carID => ({ type: DELETE_CAR_DONE_ACTION, payload: {carID} });

export const deleteCar = carID => {
    return dispatch => {
        dispatch(createDeleteRequestCarAction(carID));
        deleteCarInDB(carID).then(() => dispatch(refreshCars()));
    };
}

export const createSortCarAction = col => ({ type: SORT_CAR, payload: {col} });

export const createSaveRequestCarAction = car => ({ type: SAVE_CAR_REQUEST_ACTION, payload: {car} });

export const createSaveDoneCarAction = car => ({ type: SAVE_CAR_DONE_ACTION, payload: {car} });

export const saveCar = car => {
    return dispatch => {
        dispatch(createSaveRequestCarAction(car));
        replace(car).then(() => dispatch(refreshCars()));
    };
};
