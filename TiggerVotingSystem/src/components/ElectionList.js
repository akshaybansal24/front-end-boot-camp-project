const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const ElectionList = props => {
    return(
        <ul>
            { isEmpty(props.elections)
                ? <li>No Elections</li> :
                props.elections.map(election => {
                        return(
                            <li key={election.id}>{election.name}&emsp;{election.year}&emsp;
                                <button type="button" >View Results</button>
                            </li>
                        );
                    }
                
                )}
        </ul>
    );
};

ElectionList.defaultProps = {
    elections: [],
}