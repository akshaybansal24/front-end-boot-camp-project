import { ElectionList } from './ElectionList.js';
import { ElectionForm } from './ElectionForm';

import { useElectionToolStore } from '../hooks/useElectionToolStore';
import {ElectionResults} from "./ElectionResults";

// Mocked Election Results...
const election =       {
        "id": 1,
        "name": "California Election",
        "year": 2022,
        "questions": [
            {
                "id": 1,
                "question": "Should TCH be legal?",
                "yes": 2,
                "no": 0
            },
            {
                "id": 2,
                "question": "Assisted suicide?",
                "yes": 1,
                "no": 1
            }

        ],
        "voters": [
            1, 2
        ]
    };

export const ElectionTool = () =>{

    const viewElectionResults = () => {
        console.log("View Results - Placeholder");
    }

    const store = useElectionToolStore();
    return(
        <>
            <ElectionList elections={store.elections} onViewElectionResults={viewElectionResults}/>
            <ElectionForm addElectionButtonText="Add Election" onSubmitElection={store.addElection} />
            <ElectionResults election={election} />
        </>
    )
};
