const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const ElectionList = props => {
    return(
        <section>
            <h1 style={{fontSize: "1.5rem"}}>List of Elections</h1>
            <ul>
                { isEmpty(props.elections)
                    ? <li>No Elections</li> :
                    props.elections.map(election => {
                            return(
                                <li key={election.id}>{election.name}&emsp;{election.year}&emsp;
                                    <button type="button" onClick={() => props.onViewElectionResults(election)}>View Results</button>
                                </li>
                            );
                        }
                    
                    )}
            </ul>
        </section>
    );
};

ElectionList.defaultProps = {
    elections: [],
}