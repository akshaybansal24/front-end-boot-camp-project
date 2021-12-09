import { ADD_QUESTION_ACTION } from '../actions/questionsAction';
import { combineReducers } from "redux";

const initialQuestion = {
    id: 1,
    question: '',
    yes: 0,
    no: 0
}

const questionReducer  = (questions=[initialQuestion], action) => {
    if(action.type === ADD_QUESTION_ACTION){
        questions = [
            ...action.payload.questions,
            {
                ...initialQuestion,
                id: Math.max(...questions.map(item => item.id) , 0) + 1,
            }
        ];
    }
    console.log("Questions Reducer = ")
    console.log(questions);
    return questions;
}
export const questionsReducer = combineReducers({
    questions: questionReducer
});