import { BallotList } from './BallotList.js';
import { VoterValidation } from './VoterValidation';

import { useBallotToolStore } from '../hooks/useBallotToolStore';

export const BallotTool = () =>{


    const onVote = () => {
        console.log("Vote");
        return 
    }
    

    const store = useBallotToolStore();
    return(
        <>
            <BallotList elections={store.elections} onVote={onVote}/>
            <VoterValidation election={store.elections} voter={store.election}/>
        </>
    )
};
