import { useForm } from "../hooks/useForm";

export const VoterEditRow = props =>{

    const [voterEditForm, change ] = useForm({
        make: props.voter.make,
        model: props.voter.model,
        year: props.voter.year,
        color: props.voter.color,
        price: props.voter.price,
    });

    const save = () => {
        props.save({
            ...voterEditForm,
            id: props.voter.id,
        });
    }

    return(
        <tr key={props.voter.id}>
            <td>{props.voter.id}</td>
            <td><input type="text" name="make" value={voterEditForm.make} onChange={change} ></input></td>
            <td><input type="text" name="model" value={voterEditForm.model} onChange={change} ></input></td>
            <td><input type="number" name="year" value={voterEditForm.year} onChange={change} ></input></td>
            <td><input type="text" name="color" value={voterEditForm.color} onChange={change} ></input></td>
            <td><input type="number" name="price" value={voterEditForm.price} onChange={change} ></input></td>
            <td>
                <button type="button" onClick={save}>Save</button>
                <button type="button" onClick={() => props.cancel(-1)}>Cancel</button>
            </td>
        </tr>
    );
};