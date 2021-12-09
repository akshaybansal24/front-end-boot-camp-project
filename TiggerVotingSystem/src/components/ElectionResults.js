export const ElectionResults = props => {

    return(
        <ul>
            {
                props.election.questions.map(question => { return (<li key={question.id}>Yes: {question.yes}  No: {question.no} </li>) } )
            }
        </ul>
    );
};

ElectionResults.defaultProps = {
    election: {},
}