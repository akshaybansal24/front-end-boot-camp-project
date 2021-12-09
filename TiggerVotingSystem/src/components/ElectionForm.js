import { useForm } from "../hooks/useForm";

export const ElectionForm = props => {

    const [electionForm, change, resetElectionForm, setElectionForm] = useForm({
        name: '',
        year: '',
        questions: [{
            id: 1,
            question: '',
            yes: -1,
            no: -1,
        }],
        voters: []
    });

    const submitElection = () => {
        console.log(electionForm);

        props.onSubmitElection({...electionForm});

        resetElectionForm();
    };

    const addAnotherQuestion = () => {
        const electionFormCopy = {...electionForm};
        const newQuestion = {
            question: '',
            yes: -1,
            no: -1,
            id: Math.max(...electionForm.questions.map(item => item.id) , 0) + 1,
        }
        electionFormCopy.questions.push(newQuestion);
        console.log(electionFormCopy);
        setElectionForm({
            ...electionFormCopy
        });
        
    }

    const changeQuestion = e => {
        console.log("here");
        console.log(e);
        const electionFormCopy = {...electionForm};
        const indexToUpdate = parseInt(e.target.id) -1 ;
        console.log(indexToUpdate);
        const questionsCopy = [...electionFormCopy.questions];
        console.log(questionsCopy[indexToUpdate]);
        questionsCopy[indexToUpdate].question = e.target.value;
        setElectionForm({
            ...electionFormCopy,
            questions: [...questionsCopy]
        });
    }
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
            <section>
            {
                electionForm.questions.map(question => { return(
                    <label >
                        Question:
                        <textarea id={question.id} rows="2" columns="40" name="question" value={question.question} onChange={changeQuestion}></textarea>
                    </label>
                    )
                })
            }
            </section>
            <button type="button" onClick={addAnotherQuestion} >Add Another Question</button>
            

            <button type="button" onClick={submitElection} >{props.addElectionButtonText}</button>
        </form>
    );
};