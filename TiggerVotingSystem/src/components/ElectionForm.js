import { useForm } from "../hooks/useForm";

export const ElectionForm = props => {

    const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

    const [electionForm, change, resetElectionForm,setElectionForm] = useForm({
        name: '',
        year: '',
        question: ''
    });
    
    const submitElection = () => {
        console.log(electionForm);

        props.onSubmitElection({...electionForm});

        resetElectionForm();
    };

    const onSubmitAddQuestion = () => {
        props.addQuestion(electionForm.question);
        setElectionForm({
            ...electionForm,
            question: ''
        })
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
                    <ul>
                        { isEmpty(props.questions)
                            ? <li>No Questions</li> : 
                            props.questions.map(question => {
                                    return(
                                        <li key={question.id}>{question.question}</li>
                                    );
                                }
                            
                            )}
                    </ul>
                    <label >
                        Question:
                        <textarea rows="2" columns="40" name="question" value={electionForm.question} onChange={change}></textarea>
                    </label>
                    <button type="button" onClick={onSubmitAddQuestion} >Add Question</button>
                </section>
                
                

                <button type="button" onClick={submitElection} >{props.addElectionButtonText}</button>
            </form>
        </section>
    );
};