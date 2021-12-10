export const BallotVoterValidation = (election, voter) => {

    return (
        <form>
        <label> Vote in {election.name} {election.year}</label>
        <label>
             {voter.firstName}, Please Submit Your Voter ID:
        </label>
            <input type="text" name="voterId" />
            <button> Submit </button>
        </form>
    )
}