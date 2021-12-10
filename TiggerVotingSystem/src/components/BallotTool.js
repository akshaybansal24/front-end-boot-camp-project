import { BallotList } from './BallotList.js';
import { BallotVoterValidation } from './BallotVoterValidation';

import { useBallotToolStore } from '../hooks/useBallotToolStore';

export const BallotTool = () =>{


    const onVote = () => {
        console.log("Vote");
    }
    

    const store = useBallotToolStore();
    return(
        <>
            <BallotList elections={store.elections} onVote={onVote}/>
            <BallotVoterValidation election={store.elections} voter={store.election}/>
        </>
    )
};
