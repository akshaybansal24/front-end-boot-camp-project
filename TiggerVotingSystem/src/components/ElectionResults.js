export const ElectionResults = props => {

    return(
        <section>
            <h1 style={{fontSize: "1.5rem"}}>Result of Election {props.election.name}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Yes Count</th>
                        <th>No Count</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.election.questions.map(question => { return (
                        <tr key={question.id}>
                            <td>{question.question}</td>
                            <td>{question.yes}</td>
                            <td>{question.no}</td>
                        </tr>
                    ) } )
                }
                </tbody>
            </table>
        </section>
    );
};

ElectionResults.defaultProps = {
    election: {},
}