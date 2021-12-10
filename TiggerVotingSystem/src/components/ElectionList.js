const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const ElectionList = props => {
    return(
        <section>
            <h1 style={{fontSize: "1.5rem"}}>List of Elections</h1>
            <table>
            <thead>
                <tr>
                    <th>Election Name</th>
                    <th>Election Year</th>
                    <th>View Results</th>
                </tr>
            </thead>
            <tbody>
            { isEmpty(props.elections)
                    ? <tr>
                    <td> No Elections </td></tr> :
                    props.elections.map(election => {
                            return(
                                <tr key={election.id}>
                                    <td>{election.name}</td>
                                    <td>{election.year}</td>
                                    <td>
                                        <button className="btn" type="button" onClick={() => props.onViewElectionResults(election)}>View Results</button>
                                    </td>
                                </tr>
                                // <td >{election.name}&emsp;{election.year}&emsp;
                                //     <button type="button" onClick={() => props.onViewElectionResults(election)}>View Results</button>
                                // </td>
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