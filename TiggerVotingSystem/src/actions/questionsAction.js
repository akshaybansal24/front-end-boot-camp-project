export const ADD_QUESTION_ACTION = 'ADD_QUESTION_ACTION';

export const RESET_QUESTION_ACTION = 'RESET_QUESTION_ACTION';

export const createAddQuestionAction = question => ({type: ADD_QUESTION_ACTION, payload: {question}});

export const createResetQuestionAction = () => ({ type: RESET_QUESTION_ACTION });
