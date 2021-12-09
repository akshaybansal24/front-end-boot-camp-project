import { useForm } from "../hooks/useForm";

export const CarForm = props => {

    const [carForm, change, resetCarForm] = useForm({
        make: '',
        model: '',
        year: 1990,
        color: '',
        price: 2300,
    });

    const submitCar = () => {

        props.onSubmitCar({ ...carForm });

        resetCarForm();
    }
    return (
        <form>
            <label>
                MAKE:
                    <input type="text" name="make" value={carForm.make} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                MODEL:
                    <input type="text" name="model" value={carForm.model} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                YEAR:
                    <input type="number" name="year" value={carForm.year} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                COLOR:
                    <input type="text" name="color" value={carForm.color} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                PRICE:
                    <input type="number" name="price" value={carForm.price} onChange={change} ></input>
            </label>
            <button type="button" onClick={submitCar} >{props.buttonText}</button>
        </form>
    );
};