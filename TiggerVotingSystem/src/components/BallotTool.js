import { BallotList } from './BallotList.js';
import { BallotVoterValidation } from './BallotVoterValidation';

import { useElectionToolStore } from '../hooks/useElectionToolStore';

export const BallotTool = () =>{


    const onVote = () => {
        console.log("Vote");
    }
    

    const store = useElectionToolStore();
    return(
        <>
            <BallotList elections={store.elections} onVote={onVote}/>
            <BallotVoterValidation/>
        </>
    )
};
