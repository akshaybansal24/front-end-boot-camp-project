// import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';
// import { useState } from "react";

import { useEffect, useMemo } from 'react';
import  {useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    addVoter,
    deleteVoter,
    saveVoter,
    createEditVoterAction,
    createSortVoterAction,
    refreshVoters
} from '../actions/VoterToolActions';
import { sortedVotersSelector } from '../selectors/VoterToolSelectors';

export const useVoterToolStore = () => {

    const voters = useSelector(sortedVotersSelector);
    const votersSort = useSelector(state => state.votersSort);
    const editVoterId = useSelector(state => state.editVoterId);

    const dispatch = useDispatch();

    const boundActions = useMemo( () => bindActionCreators({
        refreshVoters,
        addVoter,
        deleteVoter,
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