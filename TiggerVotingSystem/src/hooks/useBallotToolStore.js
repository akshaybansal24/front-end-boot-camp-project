import  {useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import {
    createRefreshElectionAction,
    createVoteCastAction,
    createVoterVerifyAction,
    createSelectElectionAction
} from '../actions/ballotToolActions';

export const useBallotToolStore = () => {

    const elections = useSelector(state => state.ballotState.elections);
    const ballot = useSelector(state => state.ballotState.ballot);

    const dispatch = useDispatch();

    console.log("From the use Store = " + JSON.stringify(ballot));

    const boundActions = useMemo(() => bindActionCreators({
        castVote: createVoteCastAction,
        verifyVoter: createVoterVerifyAction,
        selectElection: createSelectElectionAction,
        refreshElections: createRefreshElectionAction
    }, dispatch), [dispatch]);

    useEffect(() => {
        boundActions.refreshElections();
    }, [boundActions]);

    return {
        elections,
        ballot,
        ...boundActions
    };
};