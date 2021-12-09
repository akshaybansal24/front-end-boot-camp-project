
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { refreshElections, addElection } from '../actions/electionToolActions';

export const useElectionToolStore = () => {

    const elections = useSelector(state => state.elections);

    const dispatch = useDispatch();

    const boundActions = useMemo(() => bindActionCreators({
        refreshElections,
        addElection
    }, dispatch), [dispatch]);

    useEffect(() => {
        boundActions.refreshElections();
    }, [boundActions]);

    //const sortedColors = sortColors(colors, sortDir);
    console.log("Elections to Render")
    console.log(elections);

    return {
        elections,
        ...boundActions
    };

};