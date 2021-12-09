import { ElectionList } from './ElectionList.js';
import { ElectionForm } from './ElectionForm';

import { useElectionToolStore } from '../hooks/useElectionToolStore';
import {ElectionResults} from "./ElectionResults";

const votes = [
    {
        "id": 1,
        "voterId": 1,
        "electionId": 1,
        "questions": [
            {
                "id": 1,
                "vote": "yes"
            },
            {
                "id": 2,
                "vote": "no"
            }
        ]
    },
    {
        "id": 2,
        "voterId": 1,
        "electionId": 2,
        "questions": [
            {
                "id": 1,
                "vote": "yes"
            },
            {
                "id": 2,
                "vote": "no"
            }
        ]
    },
    {
        "id": 3,
        "voterId": 3,
        "electionId": 1,
        "questions": [
            {
                "id": 1,
                "vote": "yes"
            },
            {
                "id": 2,
                "vote": "no"
            }
        ]
    },
    {
        "id": 4,
        "voterId": 2,
        "electionId": 2,
        "questions": [
            {
                "id": 1,
                "vote": "yes"
            },
            {
                "id": 2,
                "vote": "no"
            }
        ]
    }
];

const election =    {
    "id": 1,
    "name": "California Election",
    "year": 2022,
    "questions": [
        {
            "id": 1,
            "question": "Should TCH be legal?"
        },
        {
            "id": 2,
            "question": "Assisted suicide?"
        }
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
            <ElectionResults election={election} votes={votes}/>
        </>
    )
};
