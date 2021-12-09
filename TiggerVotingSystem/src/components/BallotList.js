const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const BallotList = props => {
    return(
        <ul>
            { isEmpty(props.elections)
                ? <li>No Elections</li> :
                props.elections.map(election => {
                        return(
                            <li key={election.id}>{election.name}&emsp;{election.year}&emsp;
                                <button type="button" onClick={() => props.onVote(election.id)} >Vote</button>
                            </li>
                        );
                    }
                
                )}
        </ul>
    );
};

BallotList.defaultProps = {
    elections: [],
}