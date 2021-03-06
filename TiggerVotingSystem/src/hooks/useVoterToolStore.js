// import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';
// import { useState } from "react";

import { useEffect, useMemo } from 'react';
import  {useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    addVoter,
    deleteVoter,
    deleteMultipleVoters,
    saveVoter,
    createEditVoterAction,
    createSortVoterAction,
    refreshVoters
} from '../actions/voterToolActions';
import { sortedVotersSelector } from '../selectors/voterToolSelectors';

export const useVoterToolStore = () => {

    const voters = useSelector(sortedVotersSelector);
    console.log("From Selector")
    console.log(voters);
    const votersSort = useSelector(state => state.voterState.votersSort);
    const editVoterId = useSelector(state => state.voterState.editVoterId);

    const dispatch = useDispatch();

    const boundActions = useMemo( () => bindActionCreators({
        refreshVoters,
        addVoter,
        deleteVoter,
        deleteMultipleVoters,
        editVoter: createEditVoterAction,
        sortVoter: createSortVoterAction,
        saveVoter
    }, dispatch), [dispatch] );

    useEffect(() => {
        boundActions.refreshVoters();
    }, [boundActions]);

    return {
        voters,
        votersSort,
        editVoterId,
        ...boundActions
    };
};