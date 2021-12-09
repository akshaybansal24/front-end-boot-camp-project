import { ADD_ACTION, 
    SUBTRACT_ACTION,
    MULTIPLY_ACTION, 
    DIVIDE_ACTION
} from '../actions/calcToolActions';

export const calcToolStoreReducer = state => {
    return state.history.reduce( (result,entry) => {
        switch(entry.type){
            case ADD_ACTION:
                return result + entry.value;
             case SUBTRACT_ACTION:
                return result - entry.value;
             case MULTIPLY_ACTION:
                return result * entry.value;
             case DIVIDE_ACTION:
                return result / entry.value;
            default:
                return result;
        }
    }, 0);
};

export const operationCountReducer = state => {
    
    return state.history.reduce( (opCount, entry) => {
        if(opCount[entry.type]){
            opCount[entry.type]++;
        }else{
            opCount[entry.type] = 1;
        }
        return opCount;
    }, {});
};