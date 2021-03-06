
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { refreshElections, addElection } from '../actions/electionToolActions';
import { createAddQuestionAction, createResetQuestionAction } from '../actions/questionsAction';

export const useElectionToolStore = () => {

    const elections = useSelector(state => state.electionState.elections);

    const questions = useSelector(state => state.questionsState.questions);

    const dispatch = useDispatch();

    const boundActions = useMemo(() => bindActionCreators({
        refreshElections,
        addElection,
        addQuestion: createAddQuestionAction,
        resetQuestions: createResetQuestionAction,
    }, dispatch), [dispatch]);

    useEffect(() => {
        boundActions.refreshElections();
    }, [boundActions]);

    //const sortedColors = sortColors(colors, sortDir);
    console.log("Elections to Render")
    console.log(elections);

    return {
        elections,
        questions,
        ...boundActions
    };

};