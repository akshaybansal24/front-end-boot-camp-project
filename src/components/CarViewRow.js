export const CarViewRow = props => {

    return (
        <tr key={props.car.id}>
            <td>{props.car.id}</td>
            <td>{props.car.make}</td>
            <td>{props.car.model}</td>
            <td>{props.car.year}</td>
            <td>{props.car.color}</td>
            <td>{props.car.price}</td>
            <td>
                <button type="button" onClick={() => props.editCar(props.car.id)}>Edit</button>
                <button type="button" onClick={() => props.deleteCar(props.car.id)}>Delete</button>
            </td>
        </tr>
    )
};

CarViewRow.defaultProps = {
    car: {},
}