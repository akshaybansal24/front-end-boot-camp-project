import { useForm } from "../hooks/useForm";

export const CarEditRow = props =>{

    const [carEditForm, change ] = useForm({
        make: props.car.make,
        model: props.car.model,
        year: props.car.year,
        color: props.car.color,
        price: props.car.price,
    });

    const save = () => {
        props.save({
            ...carEditForm,
            id: props.car.id,
        });
    }

    return(
        <tr key={props.car.id}>
            <td>{props.car.id}</td>
            <td><input type="text" name="make" value={carEditForm.make} onChange={change} ></input></td>
            <td><input type="text" name="model" value={carEditForm.model} onChange={change} ></input></td>
            <td><input type="number" name="year" value={carEditForm.year} onChange={change} ></input></td>
            <td><input type="text" name="color" value={carEditForm.color} onChange={change} ></input></td>
            <td><input type="number" name="price" value={carEditForm.price} onChange={change} ></input></td>
            <td>
                <button type="button" onClick={save}>Save</button>
                <button type="button" onClick={() => props.cancel(-1)}>Cancel</button>
            </td>
        </tr>
    );
};