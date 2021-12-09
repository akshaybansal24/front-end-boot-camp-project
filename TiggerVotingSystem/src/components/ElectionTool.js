import { ElectionList } from './ElectionList.js';
import { ElectionForm } from './ElectionForm';

import { useElectionToolStore } from '../hooks/useElectionToolStore';

export const ElectionTool = () =>{

    const viewElectionResults = () => {
        console.log("View Results - Placeholder");
    }

    const store = useElectionToolStore();
    return(
        <>
            <ElectionList elections={store.elections} onViewElectionResults={viewElectionResults}/>
            <ElectionForm addElectionButtonText="Add Election" onSubmitElection={store.addElection} />
        </>
    )
};
