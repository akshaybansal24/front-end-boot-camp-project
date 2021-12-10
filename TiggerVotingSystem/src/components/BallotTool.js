import { BallotList } from './BallotList.js';
import { BallotVoterValidation } from './BallotVoterValidation';
import { BallotCastVoteForm } from './BallotCastVoteForm';

import { useBallotToolStore } from '../hooks/useBallotToolStore';

export const BallotTool = () =>{
    const store = useBallotToolStore();

    const onVote = selectedElection => {
        store.selectElection(selectedElection);
    }

    const submitCastVote = answersMap => {
        console.log("Ballot tool Answers Map = " + JSON.stringify(answersMap));
        const newElection = {...store.ballot.election};
        newElection.voters.push(store.ballot.voter.id);
        newElection.questions.forEach(question => {
            if(answersMap[question.id - 1] === 0){
                question.no += 1;
            }
            if(answersMap[question.id - 1] === 1){
                question.yes += 1;
            }
        });
        store.castVote(newElection);
        console.log("New Election = " + JSON.stringify(newElection));
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
            {store.ballot.displayBallotForm ? 
                <BallotCastVoteForm 
                    election={store.ballot.election} 
                    voter={store.ballot.voter}
                    onSubmitCastVote = {submitCastVote}/> : <div></div>}
        </>
    )
};
