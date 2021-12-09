export const VoterViewRow = props => {

    return (
        <tr key={props.voter.id}>
            <td>{props.voter.id}</td>
            <td>{props.voter.make}</td>
            <td>{props.voter.model}</td>
            <td>{props.voter.year}</td>
            <td>{props.voter.color}</td>
            <td>{props.voter.price}</td>
            <td>
                <button type="button" onClick={() => props.editVoter(props.voter.id)}>Edit</button>
                <button type="button" onClick={() => props.deleteVoter(props.voter.id)}>Delete</button>
            </td>
        </tr>
    )
};

VoterViewRow.defaultProps = {
    car: {},
}