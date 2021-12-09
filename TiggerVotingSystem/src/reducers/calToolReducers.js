import { ADD_ACTION, 
        SUBTRACT_ACTION,
        MULTIPLY_ACTION, 
        DIVIDE_ACTION, 
        CLEAR_ACTION,
        DELETE_HISTORY } from '../actions/calcToolActions';

import { combineReducers } from "redux";


// const resultReducer = (result=0, action) => {

//     switch(action.type){
//         case ADD_ACTION:
//             return result + action.payload.value;
//         case SUBTRACT_ACTION:
//             return result - action.payload.value;
//         case MULTIPLY_ACTION:
//             return result * action.payload.value;
//         case DIVIDE_ACTION:
//             if(action.payload.value === 0){
//                 return result;
//             }
//             return result / action.payload.value;   
//         case CLEAR_ACTION:
//             return 0;
//         default:
//             return result;
//     }
// }

const historyReducer = (history =[] , action) => {
    console.log(action);
    if([ADD_ACTION,SUBTRACT_ACTION,MULTIPLY_ACTION,DIVIDE_ACTION].includes(action.type)){
        if(action.type === DIVIDE_ACTION && action.payload.value === 0){
            return history;
        }
        return [...history,{
            id: Math.max(...history.map(item => item.id) , 0) + 1,
            value: action.payload.value,
            type: action.type
        }];
    }

    if(action.type === CLEAR_ACTION){
        return [];
    }

    if(action.type === DELETE_HISTORY){
        return history.filter(h => h.id !== action.payload.value);
    }

    return history;
}

const errorMessageReducer =(errorMessage="", action) => {
    if(action.type === DIVIDE_ACTION && action.payload.value === 0){
        return "Divide by 0 is not allowed.";
    }
    return "";
}
export const calcToolReducer = combineReducers({
    // result: resultReducer,
    history: historyReducer,
    errorMessage: errorMessageReducer
});