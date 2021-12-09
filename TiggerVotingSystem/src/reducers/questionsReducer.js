import { ADD_QUESTION_ACTION, RESET_QUESTION_ACTION } from '../actions/questionsAction';
import { combineReducers } from "redux";

const questionReducer  = (questions=[], action) => {
    if(action.type === ADD_QUESTION_ACTION){
        return [
            ...questions,
            {
                question: action.payload.question,
                id: Math.max(...questions.map(item => item.id) , 0) + 1,
                yes: 0,
                no: 0
            }
        ];
    }
    if(action.type === RESET_QUESTION_ACTION){
        console.log("reste questions");
        return [];
    }
    return questions;
}
export const questionsReducer = combineReducers({
    questions: questionReducer
});