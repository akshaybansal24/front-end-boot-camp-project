export const ElectionResults = props => {

    return(
        <section>
            <h1 style={{fontSize: "1.5rem"}}>Result of Election {props.election.name}</h1>
            <ul>
                {
                    props.election.questions.map(question => { return (<li key={question.id}>{question.question} &ensp;Yes: {question.yes}  No: {question.no} </li>) } )
                }
            </ul>
        </section>
    );
};

ElectionResults.defaultProps = {
    election: {},
}