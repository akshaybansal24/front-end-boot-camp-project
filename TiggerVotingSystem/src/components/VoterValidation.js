export const VoterValidation = (election, voter) => {

    return (
        <form>
        {/* <label> Vote! </label> */}
        <label>
             Please Submit Your Voter ID:
        </label>
            <input type="text" name="voterId" />
            <button> Submit </button>
        </form>
    )
}