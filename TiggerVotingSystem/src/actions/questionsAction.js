export const ADD_QUESTION_ACTION = 'ADD_QUESTION_ACTION';

export const createAddQuestionAction = questions => ({type: ADD_QUESTION_ACTION, payload: {questions}});
