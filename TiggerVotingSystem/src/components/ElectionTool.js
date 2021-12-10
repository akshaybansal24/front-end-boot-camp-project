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

    const onAddElection = election => {
        const newElection = {
            ...election,
            questions: store.questions,
            voters: []
        }
        delete newElection.question;
        store.addElection(newElection);
        store.resetQuestions();
        //store.addQuestion([]);
    }

    console.log("Number of questions = " + store.questions.length);
    console.log(JSON.stringify(store.questions));

    return(
        <>
            <ElectionList elections={store.elections} onViewElectionResults={viewElectionResults}/>
            &emsp;
            <ElectionForm addElectionButtonText="Add Election" onSubmitElection={onAddElection} questions={store.questions} addQuestion={store.addQuestion}/>
            &emsp;
            {
                viewElectionResult !== -1 ? <ElectionResults election={election} /> : <div></div>
            }
        </>
    )
};
