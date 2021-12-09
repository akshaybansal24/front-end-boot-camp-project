import { combineReducers } from "redux";

import { REFRESH_ELECTIONS_DONE_ACTION, ADD_QUESTION_ACTION} from '../actions/electionToolActions';

const initialQuestion = {
    id: 1,
    question: '',
    yes: 0,
    no: 0
}

const electionReducer = (elections = [], action) => {
    switch(action.type){
        case REFRESH_ELECTIONS_DONE_ACTION:
            return action.payload.elections;
        default:
            return elections;
    }
};

const questionReducer  = (questions=[initialQuestion], action) => {
    
    console.log("Inside questions reducer" + JSON.stringify(questions));
    if(action.type === ADD_QUESTION_ACTION){
        questions = [
            ...action.payload.questions,
        ];
        const newQuestion = {
            id: Math.max(...questions.map(item => item.id) , 0) + 1,
            question: '',
            yes: 0,
            no: 0
        }
        questions.push(newQuestion);
        console.log(questions);
    }
    console.log("Questions Reducer = ")
    console.log(questions);
    return questions;
}

const isLoadingReducer = (isLoading=false, action) => {
    if(action.type.includes("REQUEST"))
        return true;
    if(action.type.includes("DONE"))
        return false;
    return isLoading;
}

export const electionReducers = combineReducers({
    elections: electionReducer,
    isLoading: isLoadingReducer,
    questions: questionReducer
});
