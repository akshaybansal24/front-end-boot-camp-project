import {createVoteCastAction} from '../actions/ballotToolActions';
import {useState} from 'react';

export const BallotVoteForElection = ({selectedVoterFromId, selectedElection, isValidatedForVoting, submitVote}) => {
    // selectedVoterFromId = 1;
    // selectedElection = {
    //     id: 7,
    //     name: "Weather Today",
    //     question: "",
    //     questions: [
    //      {question: 'sunny', id: 1, yes: 0, no: 0},
    //      {question: 'rainy', id: 2, yes: 0, no: 0},
    //      {question: 'snow', id: 3, yes: 0, no: 0},
    //      {question: 'overcast', id: 4, yes: 0, no: 0}],
    //      year: 2032,
    //      voter: []
    //     };
    // isValidatedForVoting =true;

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => index === position ? !item : item);

        setCheckedState(updatedCheckedState);
        console.log(checkedState);
    }
    const submitResponse = () => {
        let electionToBeSubmitted = selectedElection;
        electionToBeSubmitted.voters.push(selectedVoterFromId);
        electionToBeSubmitted.questions.forEach((question, index) => {
            if(checkedState[index]){
                question.yes++;
            } else {
                question.no++;
            }
        })
        submitVote(electionToBeSubmitted)
    };

    const [checkedState, setCheckedState] = useState(
        new Array(selectedElection?.questions?.length).fill(false)
    );

    return isValidatedForVoting && selectedElection ? (
        <div>
            <table>
            <thead>
                <tr>
                    <th colSpan="2">{selectedElection.name} - {selectedElection.year}</th>
                </tr>
            </thead>
            <tbody>
                {selectedElection.questions.map(({question}, index) => {
                    return (
                        <tr>
                            <td key={question.id}>  
                                {question}  
                            </td>
                            <td>  
                                <input type="checkbox" id={question.id} onChange={() => handleOnChange(index)} checked={checkedState[index]}/>
                            </td>
                        </tr>
                    )})
                }
            </tbody>
            </table>
            <button onClick={submitResponse}>
                Submit Response
            </button>
        </div>
    ) : (
        null
    );
    
}