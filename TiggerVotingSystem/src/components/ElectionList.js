const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const ElectionList = props => {
    return(
        <section>
            <h1 style={{fontSize: "1.5rem"}}>List of Elections</h1>
            <table>
            <thead>

            </thead>
            <tbody>
            { isEmpty(props.elections)
                    ? <td>No Elections</td> :
                    props.elections.map(election => {
                            return(
                                <td key={election.id}>{election.name}&emsp;{election.year}&emsp;
                                    <button type="button" onClick={() => props.onViewElectionResults(election)}>View Results</button>
                                </td>
                            );
                        }
                    
                    )}
            </tbody>
                
            </table>
        </section>
    );
};

ElectionList.defaultProps = {
    elections: [],
}