import { useForm } from "../hooks/useForm";

export const VoterForm = props => {

    const [VoterForm, change, resetVoterForm] = useForm({
        make: '',
        model: '',
        year: 1990,
        color: '',
        price: 2300,
    });

    const submitVoter = () => {

        props.onSubmitVoter({ ...VoterForm });

        resetVoterForm();
    }
    return (
        <form>
            <label>
                MAKE:
                    <input type="text" name="make" value={VoterForm.make} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                MODEL:
                    <input type="text" name="model" value={VoterForm.model} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                YEAR:
                    <input type="number" name="year" value={VoterForm.year} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                COLOR:
                    <input type="text" name="color" value={VoterForm.color} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                PRICE:
                    <input type="number" name="price" value={VoterForm.price} onChange={change} ></input>
            </label>
            <button type="button" onClick={submitVoter} >{props.buttonText}</button>
        </form>
    );
};