export const BallotList = props => {
    return (
        <section>
            <h1 style={{fontSize: "1.5rem"}}>List of Elections</h1>
            <table>
                <thead>
                    <tr>
                        <th>Election Name</th>
                        <th>Election Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.elections.map(election => { return (
                        <tr key={election.id}>
                            <td>{election.name}</td>
                            <td>{election.year}</td>
                            <td>
                                {props.selectedElectionId === election.id ?
                                    <>Currently Selected</> :
                                    <button className="btn" type="button" onClick={() => props.onVote(election)} >Vote</button>
                                }
                            </td>
                        </tr>
                    ) } )
                }
                </tbody>
            </table>
        </section>
    );
    // return(
    //     <ul>
    //         { isEmpty(props.elections)
    //             ? <li>No Elections</li> :
    //             props.elections.map(election => {
    //                     return(
    //                         <li key={election.id}>{election.name}&emsp;{election.year}&emsp;
    //                         {props.selectedElectionId === election.id ?
    //                             <>Curerntly Selected</> :
    //                             <button type="button" onClick={() => props.onVote(election)} >Vote</button>
    //                         }
    //                         </li>
    //                     );
    //                 }
                
    //             )}
    //     </ul>
    // );
};

BallotList.defaultProps = {
    elections: [],
}