export const BallotVoteForElection = ({selectedVoterFromId, selectedElection, isValidatedForVoting}) => {
    // selectedVoterFromId = 1;
    // selectedElection = "hhhhhhhh";
    // isValidatedForVoting =true;

    return isValidatedForVoting ? (
        <div>
            {JSON.stringify(selectedElection)}
            {JSON.stringify(selectedVoterFromId)}
        </div>
    ) : (
        null
    );
    
}