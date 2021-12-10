import {createVoteCastAction} from '../actions/ballotToolActions';

export const BallotVoteForElection = ({selectedVoterFromId, selectedElection, isValidatedForVoting}) => {
    // selectedVoterFromId = 1;
    selectedElection = {
        id: 7,
        name: "Weather Today",
        question: "",
        questions: [
         {question: 'sunny', id: 1, yes: 0, no: 0},
         {question: 'rainy', id: 2, yes: 0, no: 0},
         {question: 'snow', id: 3, yes: 0, no: 0},
         {question: 'overcast', id: 4, yes: 0, no: 0}],
         year: 2032
        };
    isValidatedForVoting =true;

    const handleOnChange = (value) => {
        console.log(value);
    }
    const submitResponse = () => {
        createVoteCastAction(selectedElection)
    };

    return isValidatedForVoting && selectedElection ? (
        <div>
            <table>
            <thead>
                <tr>
                    <th colSpan="2">{selectedElection.name} - {selectedElection.year}</th>
                </tr>
            </thead>
            <tbody>
                {selectedElection.questions.map(({question}) => {
                    return (
                        <tr>
                            <td key={question.id}>  
                                {question}  
                            </td>
                            <td>  
                                <input type="checkbox" id={question} onChange={handleOnChange}/>
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