import { BallotList } from './BallotList.js';
import { VoterValidation } from './VoterValidation';

import { useElectionToolStore } from '../hooks/useElectionToolStore';

export const BallotTool = () =>{


    const onVote = () => {
        console.log("Vote");
        return 
    }
    

    const store = useElectionToolStore();
    return(
        <>
            <BallotList elections={store.elections} onVote={onVote}/>
            <VoterValidation election={store.elections} voter={store.voters}/>
        </>
    )
};
