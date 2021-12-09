import  {useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    createAddAction,
    createSubtractAction,
    createMultiplyAction,
    createDivideAction,
    createClearAction,
    createDeleteHistoryAction
} from '../actions/calcToolActions';
import { calcToolStoreReducer, operationCountReducer} from '../reducers/calcToolReducer';

export const useCalcToolStore = () => {

    const result = useSelector(calcToolStoreReducer);

    const history = useSelector(state => state.history);

    const operationCount = useSelector(operationCountReducer);

    console.log(operationCount);

    const errorMessage = useSelector(state => state.errorMessage);

    const dipatch = useDispatch();

    const boundActions = bindActionCreators({
        add: createAddAction,
        subtract: createSubtractAction,
        multiply: createMultiplyAction,
        divide: createDivideAction,
        clear: createClearAction,
        deleteHistory: createDeleteHistoryAction
    }, dipatch);

    return {
        result,
        history,
        operationCount,
        errorMessage,
        ...boundActions
    };
};