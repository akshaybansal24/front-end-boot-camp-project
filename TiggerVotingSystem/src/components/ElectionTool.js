import { ElectionList } from './ElectionList.js';
import { ElectionForm } from './ElectionForm';

import { useElectionToolStore } from '../hooks/useElectionToolStore';
import {ElectionResults} from "./ElectionResults";

import {useState} from 'react';

// Mocked Election Results...

export const ElectionTool = () =>{

    const [viewElectionResult, setViewElectionResult] = useState(-1);

    const[election, setElection] = useState({});

    const viewElectionResults = electionToDisplay => {
        setElection({
            ...electionToDisplay
        });
        setViewElectionResult(electionToDisplay.id);
    }

    const store = useElectionToolStore();
    return(
        <>
            <ElectionList elections={store.elections} onViewElectionResults={viewElectionResults}/>
            &emsp;
            <ElectionForm addElectionButtonText="Add Election" onSubmitElection={store.addElection} />
            &emsp;
            {
                viewElectionResult !== -1 ? <ElectionResults election={election} /> : <div></div>
            }
        </>
    )
};
