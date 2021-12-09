import { useState } from 'react';
import { useCalcToolStore } from '../hooks/useCalcToolStore';
import { ADD_ACTION, 
    SUBTRACT_ACTION,
    MULTIPLY_ACTION, 
    DIVIDE_ACTION
} from '../actions/calcToolActions';

export const CalcTool = () => {

    const {
        result, 
        history,
        operationCount,
        errorMessage,
        add,
        subtract,
        multiply,
        divide,
        clear,
        deleteHistory
        } = useCalcToolStore();

    const [ numInput, setNumInput] = useState(0);

    const doClear =() => {
        setNumInput(0);
        clear();
    }
    const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

    return(
        <div>
            <section>
                Result: {result}
            </section>
            <form>
                <label>
                    Num:
                    <input type="number" value={numInput}
                        onChange={
                            ({target: { value } }) => setNumInput(value!=='' ? parseInt(value, 10) : '')
                    }
                    />
                    {errorMessage}
                </label>
                <fieldset>
                    <button type="button"
                     onClick={() => add(numInput)}>+</button>
                    <button type="button"
                     onClick={() => subtract(numInput)}>-</button>
                    <button type="button"
                     onClick={() => multiply(numInput)}>*</button>
                    <button type="button"
                     onClick={() => divide(numInput)}>/</button>
                    <button type="button"
                     onClick={() => doClear()}>Clear</button>
                </fieldset>
                <ul>
                    { isEmpty(history)
                    ? <li>No History</li> : 
                    history.map(h => {
                            return(
                                <li key={h.id}>{h.type}&emsp;{h.value}&emsp;
                                    <button type="button"
                                        onClick={ () => deleteHistory(h.id) }
                                    >Delete Histoty</button>
                                </li>
                            );
                        }
                    
                    )}
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th>Opration Name</th>
                            <th>Operation Count</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                           <td>Add</td>
                           <td>{operationCount[ADD_ACTION] ? operationCount[ADD_ACTION] : 0}</td>
                       </tr>
                       <tr>
                           <td>Subtract</td>
                           <td>{operationCount[SUBTRACT_ACTION] ? operationCount[SUBTRACT_ACTION] :0}</td>
                       </tr>
                       <tr>
                           <td>Multiply</td>
                           <td>{operationCount[MULTIPLY_ACTION] ? operationCount[MULTIPLY_ACTION] : 0}</td>
                       </tr>
                       <tr>
                           <td>Divide</td>
                           <td>{operationCount[DIVIDE_ACTION] ? operationCount[DIVIDE_ACTION] : 0}</td>
                       </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
};