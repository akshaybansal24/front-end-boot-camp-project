import { BallotList } from './BallotList.js';
import { BallotVoterValidation } from './BallotVoterValidation';
import { BallotVoteForElection } from './BallotVoteForElection';
import { useBallotToolStore } from '../hooks/useBallotToolStore';

export const BallotTool = () =>{
    const store = useBallotToolStore();

    const onVote = selectedElection => {
        store.selectElection(selectedElection);
    }
    
    const selectedElectionIdOnState = store.ballot.election ? store.ballot.election.id : null;
    return(
        <>
            <BallotList 
                elections={store.elections} 
                onVote={onVote} 
                selectedElectionId = {selectedElectionIdOnState}
                />
            {store.ballot.displayVoterForm ? 
                <BallotVoterValidation 
                    errorMessage = {store.ballot.errorMessage}
                    election={store.ballot.election} 
                    voter={store.ballot.voter}
                    onSubmitVoterId = {store.verifyVoter}/> : <div></div>}
            <BallotVoteForElection 
                selectedVoterFromId={store?.ballot?.voter.id} 
                selectedElection={store.ballot.election} 
                isValidatedForVoting={store?.ballot?.displayBallotForm}
                submitVote = {store.castVote}
            />
        </>
    )
};
