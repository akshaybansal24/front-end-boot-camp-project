import  {useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
   createAddQuestionAction
} from '../actions/questionsAction';


export const useQuestionToolStore = () => {

    const questions = useSelector(state => state.questions);
    console.log("questions = ")
    console.log(questions);
    const dispatch = useDispatch();

    const boundActions =  bindActionCreators({
        addQuestion: createAddQuestionAction,
    }, dispatch);

    return {
        questions,
        ...boundActions
    };

};