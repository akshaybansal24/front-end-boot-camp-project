import { useForm } from "../hooks/useForm";

export const VoterForm = props => {

    const [ voterForm, change, resetVoterForm] = useForm({
        make: '',
        model: '',
        year: 1990,
        color: '',
        price: 2300,
    });

    const submitVoter = () => {

        props.onSubmitVoter({ ...voterForm });

        resetVoterForm();
    }
    return (
        <form>
            <label>
                FIRST NAME:
                    <input type="text" name="firstName" value={voterForm.firstName} onChange={change} ></input>
            </label>
            <label>
                LAST NAME:
                    <input type="text" name="lastName" value={voterForm.lastName} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                ADDRESS:
                    <input type="text" name="address" value={voterForm.address} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                CITY:
                    <input type="text" name="city" value={voterForm.city} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                BIRTHDATE:
                    <input type="text" name="birthdate" value={voterForm.birthdate} onChange={change} ></input>
            </label>
            &emsp;
                <label>
                EMAIL:
                    <input type="text" name="email" value={voterForm.email} onChange={change} ></input>
            </label>
            <label>
                PHONE:
                    <input type="text" name="phone" value={voterForm.phone} onChange={change} ></input>
            </label>
            <button type="button" onClick={submitVoter} >{props.buttonText}</button>
        </form>
    );
};