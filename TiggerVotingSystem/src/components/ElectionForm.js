import { useForm } from "../hooks/useForm";

export const ElectionForm = props => {

    const [electionForm, change, resetElectionForm, setElectionForm] = useForm({
        name: '',
        year: '',
        questions: props.questions,
    });
    electionForm.questions = props.questions;
    console.log("Elction Form : " + JSON.stringify(electionForm.questions));
    console.log("Elction Form : " + JSON.stringify(props.questions));
    const submitElection = () => {
        console.log(electionForm);

        props.onSubmitElection({...electionForm});

        resetElectionForm();
    };

    const addAnotherQuestion = () => {
        console.log("Adding Question")
        console.log(electionForm.questions);
        props.addQuestion(electionForm.questions);
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
        <section>
            <h1 style={{fontSize: "1.5rem"}}>Form to Add New Eelction</h1>
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
        </section>
    );
};