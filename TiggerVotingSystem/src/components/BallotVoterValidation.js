export const BallotVoterValidation = () => {

    const mockData = {
        election: {
            id: 1,
            name: "California State",
            year: 2022
        },
        voter: {
           firstName: "Ebony",
           id: 3
    }
}
    return (
        <form>
        <label> Vote in {mockData.election.name} {mockData.election.year}</label>
        <label>
             {mockData.voter.firstName}, Please Submit Your Voter ID:
        </label>
            <input type="text" name="voterId" />
            <button> Submit </button>
        </form>
    )
}