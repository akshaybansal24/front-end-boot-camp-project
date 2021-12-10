import { useState } from 'react';

export const BallotVoterValidation = props => {

    const [voterID, setVoterID] = useState(0);

    const onChangeVoterID = e => {
        setVoterID(
            e.target.type === 'number' ? parseInt(e.target.value, 10) : e.target.value
        );
    }

    const submitVoterID = () => {
        console.log("From the voter verify form = " + voterID);
        props.onSubmitVoterId(voterID);
    }
    return (
        <form>
            <label> Vote in {props.election.name} {props.election.year}</label>
            <label>Enter Voter ID
                <input type="number" name="voterId" value={voterID} onChange={onChangeVoterID}/>
            </label>
            <label>{props.errorMessage}</label>
            <button className="btn" type="button" onClick={submitVoterID}> Submit Voter ID </button>
        </form>
    )
}