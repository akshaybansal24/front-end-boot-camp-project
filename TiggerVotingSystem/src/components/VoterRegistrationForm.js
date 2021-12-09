import { useForm } from "../hooks/useForm";

export const VoterRegistrationForm = props => {

    const [voterRegistrationForm, change, resetVoterRegistrationForm] = useForm({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        birthdate: '',
        email: '',
        phone: '',
    });

    const submitVoterRegistration = () => {

        props.onSubmitvoterRegistration({ ...voterRegistrationForm });

        resetVoterRegistrationForm();
    }
    return (
        <form>
            <label>
                First Name:
                <input type="text" name="firstName" value={voterRegistrationForm.firstName} onChange={change} ></input>
            </label>
            &emsp;
            <label>
                Last Name:
                <input type="text" name="lastName" value={voterRegistrationForm.lastName} onChange={change} ></input>
            </label>
            &emsp;
            <label>
                Address:
                <input type="text" name="address" value={voterRegistrationForm.address} onChange={change} ></input>
            </label>
            &emsp;
            <label>
                City:
                <input type="text" name="city" value={voterRegistrationForm.city} onChange={change} ></input>
            </label>
            &emsp;
            <label>
                Birthdate:
                <input type="text" name="birthdate" value={voterRegistrationForm.birthdate} onChange={change} ></input>
            </label>
            &emsp;
            <label>
                Email:
                <input type="text" name="email" value={voterRegistrationForm.email} onChange={change} ></input>
            </label>
            &emsp;
            <label>
                Phone:
                <input type="text" name="phone" value={voterRegistrationForm.phone} onChange={change} ></input>
            </label>
            &emsp;
            
            <button type="button" onClick={submitVoterRegistration} >{props.buttonText}</button>
        </form>
    );
};