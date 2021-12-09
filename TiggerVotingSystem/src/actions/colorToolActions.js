import { all, append, deleteColour } from '../apis/colors';

export const REFRESH_COLORS_REQUEST_ACTION = "REFRESH_COLORS_REQUEST_ACTION";
export const REFRESH_COLORS_DONE_ACTION = "REFRESH_COLORS_DONE_ACTION";
export const ADD_COLOR_REQUEST_ACTION = "ADD_COLOR_REQUEST_ACTION";
export const ADD_COLOR_DONE_ACTION = "ADD_COLOR_DONE_ACTION";
export const DELETE_COLOR_REQUEST_ACTION = "DELETE_COLOR_REQUEST_ACTION";
export const DELETE_COLOR_DONE_ACTION = "DELETE_COLOR_DONE_ACTION";
export const SORT_COLOR = "Sort_Color";

export const createRefreshColorsRequestAction = () => ({type: REFRESH_COLORS_REQUEST_ACTION});

export const createRefreshColorsDoneAction = colors => (
    {type: REFRESH_COLORS_DONE_ACTION, payload: {colors} 
});

export const refreshColors = () => {
    //This function is the function action object
    //when middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createRefreshColorsRequestAction());
        return all().then(colors => {
            dispatch(createRefreshColorsDoneAction(colors));
        });
    };
};

export const createAddColorRequestAction = color => ({ type: ADD_COLOR_REQUEST_ACTION, payload: {color} });

export const createAddColorDoneAction = color => ({ type: ADD_COLOR_DONE_ACTION, payload: {color} });

export const addColor = color => {
    return dispatch => {
        dispatch(createAddColorRequestAction(color));
        append(color).then(() => dispatch(refreshColors()));
    };
};

export const createDeleteRequestColorAction = colorID => ({ type: DELETE_COLOR_REQUEST_ACTION, payload: {colorID} });
export const createDeleteDoneColorAction = colorID => ({ type: DELETE_COLOR_DONE_ACTION, payload: {colorID} });

export const deleteColor = colorID => {
    return dispatch => {
        dispatch(createDeleteRequestColorAction(colorID));
        deleteColour(colorID).then(() => dispatch(refreshColors()));
    };
};

export const createSortColorAction = () => ({type: SORT_COLOR});
