import { ElectionQuestionList } from "./ElectionQuestionList";

export const ElectionResults = props => {

    let filteredVotes = props.votes.filter(vote => { return (vote.electionId === props.election.id)});

    console.log(filteredVotes);

    return(
        <ul>
            {
                filteredVotes.map(vote => { return (<ElectionQuestionList vote={vote} questions={vote.questions}/>)})
            }
        </ul>
    );
};

ElectionResults.defaultProps = {
    election: {},
    votes: [],

}