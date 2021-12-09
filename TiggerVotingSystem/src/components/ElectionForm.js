import { useForm } from "../hooks/useForm";

export const ElectionForm = props => {

    const [electionForm, change, resetElectionForm] = useForm({
        name: '',
        year: '',
        questions: [],
    });

    const submitElection = () => {

        props.onSubmitElection({...electionForm});

        resetElectionForm();
    };

    return (
        <form>
            <label>
                Name:
                    <input type="text" name="name" value={electionForm.name} onChange={change}></input>
            </label>
            <label>
                Year:
                    <input type="text" name="year" value={electionForm.year} onChange={change}></input>
            </label>

            {/*<label>*/}
            {/*    Questions:*/}
            {/*    <input type="textarea" name="questions" value={electionForm.questions} onChange={change}></input>*/}
            {/*</label>*/}


            <button type="button" onClick={submitElection} >{props.addElectionButtonText}</button>
        </form>
    );
};