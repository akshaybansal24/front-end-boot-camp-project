import { BallotList } from './BallotList.js';
import { BallotVoterValidation } from './BallotVoterValidation';

import { useBallotToolStore } from '../hooks/useBallotToolStore';

export const BallotTool = () =>{
    const store = useBallotToolStore();

    const onVote = selectedElection => {
        store.selectElection(selectedElection);
    }
    

    const selectedElectionIdOnState = store.ballot.election ? store.ballot.election.id : -1;
    return(
        <>
            <BallotList elections={store.elections} onVote={onVote} selectedElectionId = {selectedElectionIdOnState}/>
            {store.ballot.displayVoterForm ? 
                <BallotVoterValidation election={store.ballot.election} voter={store.ballot.voter}/> : <div></div>}
        </>
    )
};
